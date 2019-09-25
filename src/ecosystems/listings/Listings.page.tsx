import React from 'react';
import Header from '../../atoms/Header/Header';
import styled from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';
import ListingsFilters from './components/listings-filters';
import ListingsList from './components/listings-list';

const Wrapper = styled.div`
    text-align: center;
    margin-top: 3rem;
`;

const Inner = styled.div`
    margin-top: 3rem;
`;

const ListingsPage: React.FC = () => (
    <Wrapper>
        <Header as={'h1'}>Listings</Header>
        <Inner>
            <Container>
                <Row>
                    <Col md={3}>
                        <ListingsFilters />
                    </Col>
                    <Col md={9}>
                        <ListingsList />
                    </Col>
                </Row>
            </Container>
        </Inner>
    </Wrapper>
);

export default ListingsPage;
