import React from 'react';
import { Card, Col, Container, Jumbotron, Row, Form, Button } from 'react-bootstrap';
import Header from '../../atoms/Header/Header';
import { RouteComponentProps } from 'react-router';

const expertises = ['Yoga Teacher', 'Personal Trainer', 'Nutritionist', 'Life Coach'];

const ListingCreate: React.FC<RouteComponentProps> = () => (
    <Container fluid>
        <Jumbotron style={{ textAlign: 'center' }}>
            <Header as={'h2'}>Lets get your listing created</Header>
        </Jumbotron>
        <Row>
            <Col md={4} />
            <Col md={4} className={'mt-5 mb-5'}>
                <Card>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">
                            Once you create the listing you will have to wait for it to be approved prior it goes live
                        </Card.Subtitle>
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
                                Create
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4} />
        </Row>
    </Container>
);

export default ListingCreate;
