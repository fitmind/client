import React from 'react';
import Header from '../../atoms/Header/Header';
import { Container, Col, Row, Jumbotron, Card, Button } from 'react-bootstrap';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const BookingPage: React.FC = () => (
    <Container fluid>
        <Jumbotron>
            <Header as={'h2'}>Something wrong with your booking?</Header>
            <Paragraph as={'m'}>Feel free to cancel an upcoming booking if there is something wrong</Paragraph>
        </Jumbotron>
        <Row>
            <Col md={4} />
            <Col md={4} className={'mt-5'}>
                <Card className="text-center">
                    <Card.Header>Booking id: 123123</Card.Header>
                    <Card.Body>
                        <Card.Title>Some more info</Card.Title>
                        <Card.Text>Created on the date of: ....</Card.Text>
                        <Button variant={'outline-danger'}>Remove Booking</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4} />
        </Row>
    </Container>
);

export default BookingPage;
