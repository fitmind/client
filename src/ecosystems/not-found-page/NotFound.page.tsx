import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const NotFoundPage: React.FC = () => (
    <Jumbotron fluid>
        <Container>
            <h1>Page not found :(</h1>
            <p>Please navigate back to or login again</p>
        </Container>
    </Jumbotron>
);

export default NotFoundPage;
