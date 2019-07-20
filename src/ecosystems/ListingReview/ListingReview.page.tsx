import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from '../../assets/images/yoga_picture.png';
import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';
import CONFIG from '../../config';
import { formatDate } from '../../utils/utils';


class ListingReviewPage extends React.Component<RouteComponentProps> {
    public render() {
        return (
            <Container>
                <Row>
                    <Col md={3} />
                    <Col>
                        <Wrapper>
                            <Card>
                                <Card.Img variant="top" src={Image} />
                                <Card.Body>
                                    <Card.Title>Listing name: Yoga Instructor</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>
                                        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
                                        vehicula sem, id pulvinar dolor. Sed risus tortor, interdum id tellus et,
                                        tristique efficitur quam. Morbi fringilla nec ante in tempor. Quisque quis augue
                                        fringilla, ullamcorper sem nec, commodo augue. Aliquam sollicitudin vehicula
                                        augue, at tempor nisl vehicula sit amet. Vestibulum lobortis, enim eu vulputate
                                        sagittis, nunc est faucibus nunc, quis lacinia enim urna blandit nulla. Nunc
                                        porttitor, dui in maximus volutpat, orci velit efficitur neque, pulvinar sodales
                                        diam urna a risus.
                                    </ListGroup.Item>
                                    <ListGroup.Item>Phone: 1231423411</ListGroup.Item>
                                    <ListGroup.Item>Email: diego@mail.com</ListGroup.Item>
                                    <ListGroup.Item>Location: EC1V9AL</ListGroup.Item>
                                    <ListGroup.Item>Submitted: {formatDate('2019-07-12T10:26:03.996Z')}</ListGroup.Item>
                                </ListGroup>
                                <hr />
                                <Button
                                    variant="outline-primary"
                                    onClick={() => this.props.history.push(CONFIG.routes.dashboard)}
                                >
                                    Approve
                                </Button>
                                <hr />
                                <Button
                                    variant="outline-danger"
                                    onClick={() => this.props.history.push(CONFIG.routes.dashboard)}
                                >
                                    Disaprove
                                </Button>
                            </Card>
                        </Wrapper>
                    </Col>
                    <Col md={3} />
                </Row>
            </Container>
        );
    }
}

export default withRouter(ListingReviewPage);

const Wrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
`;
