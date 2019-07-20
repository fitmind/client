import React, { FormEvent } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { withRouter, RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import CONFIG from '../../config';

interface LoginStateProps {
    email: string;
    password: string;
}

export class LoginPage extends React.Component<RouteComponentProps, LoginStateProps> {
    public onSubmit = (e: FormEvent) => {
        e.preventDefault();
        this.props.history.push('/dashboard');
    };
    public render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col md={4} />
                    <Col>
                        <CardWrapper>
                            <Card border="secondary">
                                <Card.Header as="h5">Login</Card.Header>
                                <Card.Body>
                                    <Card.Text>Please enter with your admin login credentials</Card.Text>
                                    <Form onSubmit={this.onSubmit}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                            <Form.Text className="text-muted">
                                                Password needs to have numbers and letters
                                            </Form.Text>
                                        </Form.Group>
                                        <Button variant="outline-primary" type="submit" block={true}>
                                            Login
                                        </Button>
                                    </Form>
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

const LoginPageWithRouter = withRouter(LoginPage);

export default LoginPageWithRouter;

const CardWrapper = styled.div`
    margin-top: 5rem;
`;

const InnerFooter = styled.span`
    cursor: pointer;
`;
