import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { withRouter, RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import CONFIG from '../../config/config';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ConnectedReduxProps } from '../../redux/reducers/root.reducer';
import { userLoginAction } from '../../redux/actions/server/server.actions';

const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(24, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

interface PropsFromDispatch {
    userLoginAction: typeof userLoginAction;
}

type LoginPageAllProps = PropsFromDispatch & RouteComponentProps & ConnectedReduxProps;

export class LoginPage extends React.Component<LoginPageAllProps> {
    public render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={4} />
                    <Col>
                        <CardWrapper>
                            <Card>
                                <Card.Header as="h5">Login</Card.Header>
                                <Card.Body>
                                    <Card.Text>Please enter with your admin login credentials</Card.Text>
                                    <Formik
                                        initialValues={{ email: '', password: '' }}
                                        validationSchema={LoginSchema}
                                        onSubmit={(values, { setSubmitting }) => {
                                            this.props.userLoginAction(values);
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
                                            </Form>
                                        )}
                                    />
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <InnerFooter onClick={() => this.props.history.push(CONFIG.routes.customerSignUp)}>
                                        To Sign Up click here
                                    </InnerFooter>
                                </Card.Footer>
                            </Card>
                        </CardWrapper>
                    </Col>
                    <Col md={4} />
                </Row>
            </Container>
        );
    }
}

const mapDispatchToProps = {
    userLoginAction,
};

export default withRouter(
    connect(
        null,
        mapDispatchToProps,
    )(LoginPage),
);

const CardWrapper = styled.div`
    margin-top: 5rem;
`;

const InnerFooter = styled.span`
    cursor: pointer;
`;
