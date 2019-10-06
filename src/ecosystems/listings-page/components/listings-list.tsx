import React from 'react';
import { Card, CardColumns, ListGroup, ListGroupItem, Container, Pagination, Button } from 'react-bootstrap';
import { RouteComponentProps, withRouter } from 'react-router';
import CONFIG from '../../../config/config';
import { Listing } from '../../../interfaces/listing';
import { formatDate } from '../../../utils/format-date';
import { parseExpertiseText } from '../../../utils/parse-expertise-text';
import Header from '../../../atoms/Header/Header';

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

interface Props {
    listings?: Listing[];
}

type AllProps = RouteComponentProps & Props;

const ListingsList: React.FC<AllProps> = ({ listings, history }) => (
    <Container>
        <CardColumns>
            {listings.length === 0 && (
                <div>
                    <Header as={'h2'}>Sorry there are no listings available</Header>
                </div>
            )}
            {listings.length > 0 &&
                listings.map((listing, i) => (
                    <Card key={i} className={`mb-4 text-center`}>
                        <Card.Header>{listing.name}</Card.Header>
                        <Card.Img variant="top" src={listing.pictureUrl} />
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                <span className={'font-weight-bold'}>Price: £</span>
                                {listing.price}.00
                            </ListGroupItem>
                            <ListGroupItem>
                                <span className={'font-weight-bold'}>Location: </span>
                                {listing.postCode}
                            </ListGroupItem>
                            <ListGroupItem>
                                <span className={'font-weight-bold'}>Expertise: </span>
                                {parseExpertiseText(listing.expertiseArea)}
                            </ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <span className={'font-weight-bold'}>Description: </span>
                            <Card.Text>{listing.description}</Card.Text>
                            <Button onClick={() => history.push(CONFIG.routes.listingId(listing._id))}>
                                View Listing
                            </Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <span className={'font-weight-bold'}>Created: </span>
                            {formatDate(listing.createdTimeStamp)}
                        </Card.Footer>
                    </Card>
                ))}
        </CardColumns>
        <Pagination className={'d-flex justify-content-center mt-4'}>{renderPagination()}</Pagination>
    </Container>
);

export default withRouter(ListingsList);
