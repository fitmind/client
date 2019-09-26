import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import Header from '../../../atoms/Header/Header';
import { RouteComponentProps } from 'react-router';

const ListingCreate: React.FC<RouteComponentProps> = () => (
    <Container fluid>
        <Jumbotron>
            <Header as={'h2'}>Lets get your listing created</Header>
        </Jumbotron>
        <Row>
            <Col md={4} />
            <Col md={4} className={'mt-5 mb-5'}>
                <h3>Current Listings Live</h3>
            </Col>
            <Col md={4} />
        </Row>
    </Container>
);

export default ListingCreate;
