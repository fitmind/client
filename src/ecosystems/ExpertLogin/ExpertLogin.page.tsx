import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { withRouter, RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import CONFIG from '../../config/config';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ConnectedReduxProps } from '../../redux/reducers/root.reducer';

const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(24, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

type LoginPageAllProps = RouteComponentProps & ConnectedReduxProps;

export class ExpertLoginPage extends React.Component<LoginPageAllProps> {
    public render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={4} />
                    <Col>
                        <CardWrapper>
                            <Card>
                                <Card.Header as="h5">Expert Login</Card.Header>
                                <Card.Body>
                                    <Formik
                                        initialValues={{ email: '', password: '' }}
                                        validationSchema={LoginSchema}
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
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.email}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Password"
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
                                                <Button
                                                    variant="outline-primary"
                                                    type="submit"
                                                    block={true}
                                                    disabled={isSubmitting}
                                                >
                                                    Login
                                                </Button>
                                                <Button
                                                    variant="outline-secondary"
                                                    onClick={() => this.props.history.push(CONFIG.routes.expertSignUp)}
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
    }
}

export default withRouter(
    connect(
        null,
        null,
    )(ExpertLoginPage),
);

const CardWrapper = styled.div`
    margin-top: 5rem;
`;

const InnerFooter = styled.span`
    cursor: pointer;
`;
