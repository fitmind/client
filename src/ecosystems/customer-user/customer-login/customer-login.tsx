import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { withRouter, RouteComponentProps } from 'react-router';
import CONFIG from '../../../config/config';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ConnectedReduxProps } from '../../../redux/reducers/root.reducer';
import { customerUserLoginAction } from './customer-login.actions';
import { bindActionCreators } from 'redux';
import { customerUserLogoutAction } from '../../../redux/flows/customer-logout/customer-logout-action';

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
    customerUserLoginAction: typeof customerUserLoginAction;
    customerUserLogoutAction: typeof customerUserLogoutAction;
}

type LoginPageAllProps = PropsFromDispatch & RouteComponentProps & ConnectedReduxProps;

class CustomerLogin extends React.Component<LoginPageAllProps> {
    public componentDidMount() {
        this.props.customerUserLogoutAction();
    }

    public render() {
        return (
            <Container fluid>
                <Row className={'mt-5 mb-5'}>
                    <Col md={4} />
                    <Col>
                        <Card>
                            <Card.Header as="h5">Login</Card.Header>
                            <Card.Body>
                                <Card.Text>Please enter with your admin login credentials</Card.Text>
                                <Formik
                                    initialValues={{ email: 'testing@email.com', password: 'Testing123!' }}
                                    validationSchema={LoginSchema}
                                    onSubmit={(values, { setSubmitting }) => {
                                        this.props.customerUserLoginAction(values);
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
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.email}
                                                </Form.Control.Feedback>
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
                                                block={true}
                                                onClick={() => this.props.history.push(CONFIG.routes.customerRegister)}
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
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            customerUserLoginAction,
            customerUserLogoutAction,
        },
        dispatch,
    );

export default withRouter(
    connect(
        null,
        mapDispatchToProps,
    )(CustomerLogin),
);
