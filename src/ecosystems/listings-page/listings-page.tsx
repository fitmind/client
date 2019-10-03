import React, { useEffect } from 'react';
import Header from '../../atoms/Header/Header';
import { Container, Col, Row } from 'react-bootstrap';
import ListingsFilters from './components/listings-filters';
import ListingsList from './components/listings-list';
import { getListings } from './listings-page.actions';
import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers/root.reducer';
import { Listing } from '../../interfaces/listing';

interface MapStateToProps {
    listings: Listing[];
}

interface MapDispatchToProps {
    getListings: typeof getListings;
}

type allProps = MapStateToProps & MapDispatchToProps;

const ListingsPage: React.FC<allProps> = ({ listings, getListings }) => {
    useEffect(() => {
        getListings({ page: 1, size: 20 });
    }, [getListings]);

    return (
        <Container fluid className={'mt-5 mb-5'}>
            <Header as={'h1'}>Listings</Header>
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
        </Container>
    );
};

const mapStateToProps = (state: ApplicationState) => ({
    listings: state.server.listings,
});

const mapDispatchToProps = {
    getListings,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListingsPage);
