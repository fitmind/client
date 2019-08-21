import React from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import styled from 'styled-components';
import CONFIG from '../../config/config';
import { ApplicationState, ConnectedReduxProps } from '../../redux/reducers/root.reducer';
import { customerUserInterface } from '../../redux/reducers/server-reducer/server.reducer';

interface PropsFromState {
    customerUser: customerUserInterface;
}

type CustomerProfilePageAllProps = RouteComponentProps & ConnectedReduxProps & PropsFromState;

export class CustomerProfileUpdate extends React.Component<CustomerProfilePageAllProps> {
    render() {
        const { customerUser } = this.props;
        return (
            <Container fluid>
                <Row>
                    <Col md={4} />
                    <Col md={4}>
                        <CardWrapper>
                            <Card>
                                <Card.Header as="h5">Edit your Profile</Card.Header>
                                <Card.Body>
                                    <CenterContainer>
                                        <Image src={customerUser.pictureUrl} rounded />
                                        <Form>
                                            <Form.Group>
                                                <Form.Label>Description of yourself *</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows="6"
                                                    defaultValue={customerUser.description}
                                                />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Phone number *</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter phone"
                                                    defaultValue={customerUser.phone}
                                                />
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label>Coaches you are looking for *</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    multiple
                                                    defaultValue={customerUser.interestedInExperiseAreas}
                                                >
                                                    {Object.keys(CONFIG.expertises).map((key: string) => (
                                                        <option key={key} value={CONFIG.expertises[key].value}>
                                                            {CONFIG.expertises[key].display}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                            </Form.Group>
                                            <Button variant="primary">Update Profile</Button>
                                        </Form>
                                    </CenterContainer>
                                </Card.Body>
                            </Card>
                        </CardWrapper>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const CenterContainer = styled.div`
    text-align: center;
`;

const CardWrapper = styled.div`
    margin-top: 5rem;
`;

const mapStateToProps = (state: ApplicationState) => ({
    customerUser: state.server.customerUser,
});
export default withRouter(
    connect(
        mapStateToProps,
        {},
    )(CustomerProfileUpdate),
);
