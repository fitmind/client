import React from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import styled from 'styled-components';
import CONFIG from '../../config/config';
import { ApplicationState, ConnectedReduxProps } from '../../redux/reducers/root.reducer';
import { customerUserInterface } from '../../redux/reducers/server-reducer/server.reducer';
import { fetchCustomerUserAction } from '../../redux/actions/server/server.actions';

import { Formik } from 'formik';
import * as Yup from 'yup';

const CustomerProfileUpdateSchema = Yup.object().shape({
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
                                                // this.props.customerProfileUpdateAction(values);
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
                                                            onBlur={handleBlur}
                                                            isValid={
                                                                touched.interestedInExpertiseAreas &&
                                                                !errors.interestedInExpertiseAreas
                                                            }
                                                            isInvalid={!!errors.interestedInExpertiseAreas}
                                                        >
                                                            {' '}
                                                            {Object.keys(CONFIG.expertises).map((key: string) => (
                                                                <option key={key} value={CONFIG.expertises[key].value}>
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
                                                        Register
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
        },
    )(CustomerProfileUpdate),
);
