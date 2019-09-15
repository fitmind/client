import React from 'react';
import { Card, CardColumns, Button, ListGroup, ListGroupItem, Container, Pagination } from 'react-bootstrap';
import listings from '../mock-listings.json';
import yogaPicture from '../../../assets/images/yoga_picture.png';
import { RouteComponentProps, withRouter } from 'react-router';
import CONFIG from '../../../config/config';
import moment from 'moment';

const mockDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis, odio sed laoreet ornare, ex leo ultricies augue, eget laoreet est sapien at dui. Nulla cursus erat vitae ligula tincidunt, nec hendrerit augue molestie. Quisque et condimentum dui.`;

const renderPagination = () => {
    let items = [];
    let active = 1;
    for (let number = 1; number <= 10; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return items;
};

const ListingsList: React.FC<RouteComponentProps> = props => (
    <Container fluid>
        <CardColumns>
            {listings.map(listing => (
                <Card key={listing.id} className={`mb-4`}>
                    <Card.Img variant="top" src={yogaPicture} />
                    <Card.Title className={`mt-4`}>Qualified Yoga Teacher - Brixton</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Price: £{listing.price}.00</ListGroupItem>
                        <ListGroupItem>Location: {listing.postCode}</ListGroupItem>
                        <ListGroupItem>Created: {moment(listing.createdTimeStamp).format('MMMM YYYY')}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Text>{mockDescription}</Card.Text>
                        <Button
                            onClick={() => props.history.push(CONFIG.routes.listingId(listing._id))}
                            variant="outline-primary"
                        >
                            Go to listing
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </CardColumns>
        <Pagination className={'d-flex justify-content-center mt-4'}>{renderPagination()}</Pagination>
    </Container>
);

export default withRouter(ListingsList);
