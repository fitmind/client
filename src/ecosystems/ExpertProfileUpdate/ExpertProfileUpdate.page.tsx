import { Formik } from 'formik';
import React from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import styled from 'styled-components';
import * as Yup from 'yup';
import CONFIG from '../../config/config';
import { expertProfileUpdateAction, fetchExpertUserAction } from '../../redux/actions/server/server.actions';
import { ApplicationState, ConnectedReduxProps } from '../../redux/reducers/root.reducer';
import { expertUserInterface } from '../../redux/reducers/server-reducer/server.reducer';

const ExpertProfileUpdateSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(24, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(24, 'Too Long!')
        .required('Required'),
    interestedInExpertiseAreas: Yup.array()
        .of(Yup.string())
        .min(1)
        .required('Required'),
    description: Yup.string()
        .min(6, 'Too Short!')
        .max(700, 'Too Long!')
        .required('Required'),
    phone: Yup.string()
        .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            'Invalid',
        )
        .required('Required'),
});
interface PropsFromState {
    expertUser: expertUserInterface;
}

interface PropsFromDispatch {
    fetchExpertUserAction: typeof fetchExpertUserAction;
    expertProfileUpdateAction: typeof expertProfileUpdateAction;
}
type ExpertProfilePageAllProps = RouteComponentProps & ConnectedReduxProps & PropsFromState & PropsFromDispatch;

export class ExpertProfileUpdate extends React.Component<ExpertProfilePageAllProps> {
    componentDidMount() {
        this.props.fetchExpertUserAction();
    }
    render() {
        const { expertUser } = this.props;
        return (
            <Container fluid>
                <Row>
                    <Col md={4} />
                    <Col md={4}>
                        <CardWrapper>
                            <Card>
                                <Card.Header as="h5">Edit your Profile</Card.Header>
                                <Card.Body>
                                    <CenterContainer>
                                        <Image src={expertUser.pictureUrl} rounded />
                                        <Formik
                                            enableReinitialize={true} // #DOUBT without this, details not coming
                                            initialValues={expertUser}
                                            validationSchema={ExpertProfileUpdateSchema}
                                            onSubmit={(values, { setSubmitting }) => {
                                                this.props.expertProfileUpdateAction(values);
                                                setSubmitting(false);
                                            }}
                                            render={({
                                                values,
                                                errors,
                                                touched,
                                                handleBlur,
                                                handleChange,
                                                handleSubmit,
                                                isSubmitting,
                                                setFieldValue,
                                            }) => (
                                                <Form noValidate onSubmit={handleSubmit}>
                                                    <Form.Group>
                                                        <Form.Label>First Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="firstName"
                                                            placeholder="your name"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.firstName}
                                                            isValid={touched.firstName && !errors.firstName}
                                                            isInvalid={!!errors.firstName}
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.firstName}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label>Last Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="lastName"
                                                            placeholder="your last name"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.lastName}
                                                            isValid={touched.lastName && !errors.lastName}
                                                            isInvalid={!!errors.lastName}
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.lastName}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label>Your Description</Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={4}
                                                            type="text"
                                                            name="description"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.description}
                                                            isValid={touched.description && !errors.description}
                                                            isInvalid={!!errors.description}
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.description}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label>
                                                            What type of coaching are you looking at?
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="select"
                                                            multiple={true}
                                                            name="expertise"
                                                            onChange={evt =>
                                                                setFieldValue(
                                                                    'expertise',
                                                                    [].slice
                                                                        .call(
                                                                            (evt.target as HTMLSelectElement)
                                                                                .selectedOptions,
                                                                        )
                                                                        .map(option => option.value),
                                                                )
                                                            }
                                                            values={expertUser.expertise}
                                                            onBlur={handleBlur}
                                                            isValid={touched.expertise && !errors.expertise}
                                                            isInvalid={!!errors.expertise}
                                                        >
                                                            {' '}
                                                            {Object.keys(CONFIG.expertises).map((key: string) => (
                                                                <option
                                                                    key={key}
                                                                    value={CONFIG.expertises[key].value}
                                                                    selected={
                                                                        values &&
                                                                        values.expertise &&
                                                                        values.expertise.indexOf(
                                                                            CONFIG.expertises[key].value,
                                                                        ) !== -1
                                                                            ? true
                                                                            : false
                                                                    }
                                                                >
                                                                    {CONFIG.expertises[key].display}
                                                                </option>
                                                            ))}
                                                        </Form.Control>
                                                    </Form.Group>

                                                    <Form.Group>
                                                        <Form.Label>Phone</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="phone"
                                                            placeholder="Enter phone"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.phone}
                                                            isValid={touched.phone && !errors.phone}
                                                            isInvalid={!!errors.phone}
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                        <Form.Control.Feedback type="invalid">
                                                            {errors.phone}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Button
                                                        variant="outline-primary"
                                                        type="submit"
                                                        block={true}
                                                        disabled={isSubmitting}
                                                    >
                                                        Update Profile
                                                    </Button>
                                                </Form>
                                            )}
                                        />
                                    </CenterContainer>
                                </Card.Body>
                            </Card>
                        </CardWrapper>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const CenterContainer = styled.div`
    text-align: center;
`;

const CardWrapper = styled.div`
    margin-top: 5rem;
`;

const mapStateToProps = (state: ApplicationState) => ({
    expertUser: state.server.expertUser,
});
export default withRouter(
    connect(
        mapStateToProps,
        {
            fetchExpertUserAction,
            expertProfileUpdateAction,
        },
    )(ExpertProfileUpdate),
);
