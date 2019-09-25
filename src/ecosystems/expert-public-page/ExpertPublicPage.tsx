import React from 'react';
import { Card, CardColumns, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import Header from '../../atoms/Header/Header';
import person from '../../assets/images/daniel_photo.png';
import CONFIG from '../../config/config';
import moment from 'moment';
import { RouteComponentProps, withRouter } from 'react-router';

const mockDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget suscipit leo, in gravida ex. Ut et nunc mauris. Sed aliquet nisl erat, a suscipit libero semper ut. Donec pretium sagittis scelerisque. In quis tempus nisi. Nulla elementum erat in sollicitudin ullamcorper. Curabitur sit amet placerat nibh. Suspendisse potenti. Mauris id nulla faucibus, porta eros posuere, viverra ex. Nam rhoncus magna sit amet tellus elementum, quis tristique dui gravida. Sed tempor pellentesque elit, sit amet luctus lorem iaculis vitae. Etiam in sapien scelerisque, vestibulum nisl ac, porttitor felis. Cras id euismod dui.

Donec egestas consequat est, fermentum viverra est tincidunt quis. Sed non enim at lacus hendrerit maximus. Cras a magna aliquam, tincidunt orci ut, mollis nibh. Quisque aliquam non massa convallis efficitur. Fusce quis efficitur orci. Pellentesque pellentesque sit amet leo varius ullamcorper. Aenean ac eros at neque dapibus congue ut vitae turpis. Aenean tristique ante nisi, quis commodo justo aliquam sit amet. Maecenas scelerisque, magna a fringilla fermentum, lectus est fermentum erat, a condimentum neque turpis vitae enim. Morbi eleifend id lacus id eleifend. Ut et tristique nisi. Ut blandit auctor ante, ac congue ipsum sagittis vel. Maecenas non nulla non lacus blandit tristique.`;

const expertises = ['Personal Trainer', 'Yoga Coach', 'Nutritionist'];
const liveListings = [
    'Personal Trainer with 12 years of experience',
    'Yoga Coach for rehabilitation therapy',
    'Nutritionist for weight loss',
];
const shortDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget suscipit leo, in gravida ex. Ut et nunc mauris. Sed aliquet nisl erat, a suscipit libero semper ut. Donec pretium sagittis scelerisque. In quis tempus nisi. Nulla elementum erat in sollicitudin ullamcorper. Curabitur sit amet placerat nibh. Suspendisse potenti. Mauris id nulla faucibus, porta eros posuere, viverra ex. Nam rhoncus magna sit amet tellus elementum, quis tristique dui gravida. Sed tempor pellentesque elit, sit amet luctus lorem iaculis vitae.`;
const comments = [shortDesc, shortDesc, shortDesc];

const ExpertPublicPage: React.FC<RouteComponentProps> = props => (
    <Container className={`mt-5`} style={{ textAlign: 'center' }}>
        <Header as={'h1'}>Daniel Jones</Header>
        <CardColumns className={`mb-5 mt-5`}>
            <Card>
                <Card.Img variant="top" src={person} />
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Expertise: Yoga Coach, Nutritionist, Personal Trainer</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Text>Description: {mockDescription}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    Joined: {moment('2019-09-14T00:10:37.726Z').format('MMMM YYYY')}
                </Card.Footer>
            </Card>
            <Card>
                <Card.Header>Expertises:</Card.Header>
                <ListGroup variant="flush">
                    {expertises.map(e => (
                        <ListGroup.Item
                            key={e}
                            style={{ cursor: 'pointer' }}
                            onClick={() => props.history.push(CONFIG.routes.listings)}
                        >
                            {e}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
            <Card>
                <Card.Header>Live Listings:</Card.Header>
                <ListGroup variant="flush">
                    {liveListings.map(e => (
                        <ListGroup.Item
                            key={e}
                            style={{ cursor: 'pointer' }}
                            onClick={() => props.history.push(CONFIG.routes.NavigateToListing(123))}
                        >
                            {e}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
            <Card>
                <Card.Header>Comments:</Card.Header>
                <ListGroup variant="flush">
                    {comments.map((e, i) => (
                        <ListGroup.Item key={i}>{e}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        </CardColumns>
    </Container>
);

export default withRouter(ExpertPublicPage);
