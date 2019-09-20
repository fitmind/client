import React from 'react';
import { Button, Card, Col, Container, Form, Jumbotron, Row } from 'react-bootstrap';
import Header from '../../atoms/Header/Header';
import { RouteComponentProps } from 'react-router';

const expertises = ['Yoga Teacher', 'Personal Trainer', 'Nutritionist', 'Life Coach'];

const ListingUpdate: React.FC<RouteComponentProps> = () => (
    <Container fluid>
        <Jumbotron style={{ textAlign: 'center' }}>
            <Header as={'h2'}>Something needs tweaking in your listing?</Header>
        </Jumbotron>
        <Row>
            <Col md={4} />
            <Col md={4} className={'mt-5 mb-5'}>
                <Card>
                    <Card.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Listing Name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Post Code</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Expertise</Form.Label>
                                <Form.Control as="select">
                                    {expertises.map(e => (
                                        <option key={e}>{e}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                            <Button variant="outline-primary" type="submit" block>
                                Update
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4} />
        </Row>
    </Container>
);

export default ListingUpdate;
