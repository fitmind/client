import React from 'react';
import { Container, Card, CardDeck } from 'react-bootstrap';
import foodImg from '../../../assets/images/food.png';
import laptopImg from '../../../assets/images/laptop.png';
import Header from '../../../atoms/Header/Header';

const options = [
    {
        header: 'Article Title goes here...',
        body: 'Article body goes here',
        img: foodImg,
    },
    {
        header: 'Article Title goes here...',
        body: 'Article body goes here',
        img: laptopImg,
    },
    {
        header: 'Article Title goes here...',
        body: 'Article body goes here',
        img: foodImg,
    },
    {
        header: 'Article Title goes here...',
        body: 'Article body goes here',
        img: laptopImg,
    },
];

const style = {
    backgroundColor: '#f8f9fa',
    paddingTop: '2rem',
};

const HomeOptions = () => (
    <Container fluid style={style}>
        <Header as={'h2'}>Blog</Header>
        <CardDeck>
            {options.map((option, i) => (
                <Card key={i} className={`mt-3 mb-5`} style={{ cursor: 'pointer' }}>
                    <Card.Img variant="top" src={option.img} style={{ maxHeight: '222px' }} />
                    <Card.Body>
                        <Card.Title>{option.header}</Card.Title>
                        <Card.Text>{option.body}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            ))}
        </CardDeck>
    </Container>
);

export default HomeOptions;
