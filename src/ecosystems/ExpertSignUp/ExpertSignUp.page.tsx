import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

const ExpertSignUpSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(24, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(24, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(24, 'Too Long!')
        .required('Required'),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password confirm is required'),
    // expertise: [],
    description: Yup.string()
        .min(6, 'Too Short!')
        .max(700, 'Too Long!')
        .required('Required'),
});

const ExpertSignUpPage: React.FC = () => (
    <Container fluid>
        <Row>
            <Col md={4} />
            <Col>
                <CardWrapper>
                    <Card>
                        <Card.Header as="h5">Expert Registration</Card.Header>
                        <Card.Body>
                            <Formik
                                initialValues={{
                                    email: '',
                                    firstName: '',
                                    lastName: '',
                                    password: '',
                                    passwordConfirm: '',
                                    expertise: [],
                                    description: '',
                                }}
                                validationSchema={ExpertSignUpSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    console.log(values);
                                    console.log('I NEED TO BE HOOKED UP');
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
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder="Enter email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                isValid={touched.email && !errors.email}
                                                isInvalid={!!errors.email}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                                isValid={touched.password && !errors.password}
                                                isInvalid={!!errors.password}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.password}
                                            </Form.Control.Feedback>
                                            <Form.Text className="text-muted">
                                                Password needs to have numbers and letters
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password Confirmation</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="passwordConfirm"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.passwordConfirm}
                                                isValid={touched.passwordConfirm && !errors.passwordConfirm}
                                                isInvalid={!!errors.passwordConfirm}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.passwordConfirm}
                                            </Form.Control.Feedback>
                                            <Form.Text className="text-muted">Passwords need to match</Form.Text>
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
                        </Card.Body>
                    </Card>
                </CardWrapper>
            </Col>
            <Col md={4} />
        </Row>
    </Container>
);

export default connect(
    null,
    null,
)(ExpertSignUpPage);

const CardWrapper = styled.div`
    margin-top: 5rem;
`;
