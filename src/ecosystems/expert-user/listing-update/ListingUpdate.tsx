import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import Header from '../../../atoms/Header/Header';
import { RouteComponentProps } from 'react-router';

const ListingUpdate: React.FC<RouteComponentProps> = () => (
    <Container fluid>
        <Jumbotron>
            <Header as={'h2'}>Your listing needs updating?</Header>
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

export default ListingUpdate;
