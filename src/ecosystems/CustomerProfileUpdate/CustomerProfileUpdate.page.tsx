import React from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import styled from 'styled-components';
import CONFIG from '../../config/config';
import { ApplicationState, ConnectedReduxProps } from '../../redux/reducers/root.reducer';
import { customerUserInterface } from '../../redux/reducers/server-reducer/server.reducer';
import { fetchCustomerUserAction, customerProfileUpdateAction } from '../../redux/actions/server/server.actions';

import { Formik } from 'formik';
import * as Yup from 'yup';

const CustomerProfileUpdateSchema = Yup.object().shape({
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
    customerUser: customerUserInterface;
}

interface PropsFromDispatch {
    fetchCustomerUserAction: typeof fetchCustomerUserAction;
    customerProfileUpdateAction: typeof customerProfileUpdateAction;
}
type CustomerProfilePageAllProps = RouteComponentProps & ConnectedReduxProps & PropsFromState & PropsFromDispatch;

export class CustomerProfileUpdate extends React.Component<CustomerProfilePageAllProps> {
    componentDidMount() {
        this.props.fetchCustomerUserAction();
    }
    render() {
        const { customerUser } = this.props;
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
                                        <Image src={customerUser.pictureUrl} rounded />
                                        <Formik
                                            enableReinitialize={true} // #DOUBT without this, details not coming
                                            initialValues={customerUser}
                                            validationSchema={CustomerProfileUpdateSchema}
                                            onSubmit={(values, { setSubmitting }) => {
                                                this.props.customerProfileUpdateAction(values);
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
                                                            name="interestedInExpertiseAreas"
                                                            onChange={evt =>
                                                                setFieldValue(
                                                                    'interestedInExpertiseAreas',
                                                                    [].slice
                                                                        .call(
                                                                            (evt.target as HTMLSelectElement)
                                                                                .selectedOptions,
                                                                        )
                                                                        .map(option => option.value),
                                                                )
                                                            }
                                                            values={customerUser.interestedInExpertiseAreas}
                                                            onBlur={handleBlur}
                                                            isValid={
                                                                touched.interestedInExpertiseAreas &&
                                                                !errors.interestedInExpertiseAreas
                                                            }
                                                            isInvalid={!!errors.interestedInExpertiseAreas}
                                                        >
                                                            {' '}
                                                            {Object.keys(CONFIG.expertises).map((key: string) => (
                                                                <option
                                                                    key={key}
                                                                    value={CONFIG.expertises[key].value}
                                                                    selected={
                                                                        values &&
                                                                        values.interestedInExpertiseAreas &&
                                                                        values.interestedInExpertiseAreas.indexOf(
                                                                            CONFIG.expertises[key].value,
                                                                        ) != -1
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
    customerUser: state.server.customerUser,
});
export default withRouter(
    connect(
        mapStateToProps,
        {
            fetchCustomerUserAction,
            customerProfileUpdateAction,
        },
    )(CustomerProfileUpdate),
);
