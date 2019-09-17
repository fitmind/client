import React from 'react';
import { Card, CardDeck, Container, ListGroup, ListGroupItem, Nav, Form, Button } from 'react-bootstrap';
import yogaPicture from '../../assets/images/yoga_picture.png';
import moment from 'moment';
import Header from '../../atoms/Header/Header';
import { RouteComponentProps, withRouter } from 'react-router';
import CONFIG from '../../config/config';

const mockDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis, odio sed laoreet ornare, ex leo ultricies augue, eget laoreet est sapien at dui. Nulla cursus erat vitae ligula tincidunt, nec hendrerit augue molestie. Quisque et condimentum dui.`;

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const availableHours = [
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
];

const ListingSinglePage: React.FC<RouteComponentProps> = props => (
    <Container className={`mt-5`} style={{ textAlign: 'center' }}>
        <Header as={'h1'}>Qualified Yoga Teacher - By Daniel Jones</Header>
        <CardDeck className={`mb-5 mt-5`}>
            <Card>
                <Card.Header>Qualified Yoga Teacher</Card.Header>
                <Card.Img variant="top" src={yogaPicture} />
                <Card.Title className={`mt-4`}>Diego Romero</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Price: £100.00</ListGroupItem>
                    <ListGroupItem>Location: NW13LR</ListGroupItem>
                    <ListGroupItem>Expertise: Yoga Coach</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Text>Description: {mockDescription}</Card.Text>
                    <Button
                        variant={'outline-primary'}
                        onClick={() => props.history.push(CONFIG.routes.navigateToExpertPublicPage('123'))}
                    >
                        visit Expert
                    </Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                    Created: {moment('2019-09-14T00:10:37.726Z').format('MMMM YYYY')}
                </Card.Footer>
            </Card>
            <Card>
                <Card.Header>
                    <Nav variant="pills" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="#first">Week 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#second">Week 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#third">Week 3</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#fourth">Week 4</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#fifth">Week 5</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#sixth">Week 6</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <ListGroup variant="flush">
                    {days.map(day => (
                        <ListGroup.Item key={day}>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label column={true}>{day}</Form.Label>
                                <Form.Control as="select">
                                    {availableHours.map(availableHour => (
                                        <option key={availableHour}>{availableHour}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
            <Card bg="success" text="white">
                <Card.Title className={`mt-4`}>This will be the payment card</Card.Title>
                <Card.Body>
                    <Card.Text>To be implemented</Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
    </Container>
);

export default withRouter(ListingSinglePage);
