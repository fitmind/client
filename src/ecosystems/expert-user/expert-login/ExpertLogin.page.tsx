import { Formik } from 'formik';
import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import * as Yup from 'yup';
import CONFIG from '../../../config/config';
import { ConnectedReduxProps } from '../../../redux/reducers/root.reducer';
import { expertUserLoginAction } from './expert-login.actions';

const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(24, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

interface propsFromDispatch {
    expertUserLoginAction: typeof expertUserLoginAction;
}

type LoginPageAllProps = RouteComponentProps & ConnectedReduxProps & propsFromDispatch;

const ExpertLoginPage: React.FC<LoginPageAllProps> = ({ expertUserLoginAction, history }) => {
    return (
        <Container fluid className={'mt-5'}>
            <Row>
                <Col md={4} />
                <Col>
                    <Card>
                        <Card.Header as="h5">Expert Login</Card.Header>
                        <Card.Body>
                            <Formik
                                initialValues={{ email: 'diegoromero.audio@gmail.com', password: 'ValidPassword123' }}
                                validationSchema={LoginSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    expertUserLoginAction(values);
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
                                            <Form.Label column={true}>Email address</Form.Label>
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
                                            <Form.Label column={true}>Password</Form.Label>
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
                                            onClick={() => history.push(CONFIG.routes.expertSignUp)}
                                            block={true}
                                        >
                                            Register
                                        </Button>
                                    </Form>
                                )}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} />
            </Row>
        </Container>
    );
};

export default withRouter(
    connect(
        null,
        {
            expertUserLoginAction,
        },
    )(ExpertLoginPage),
);
