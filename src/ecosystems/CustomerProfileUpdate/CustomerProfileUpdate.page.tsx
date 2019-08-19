import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Container, Row, Col, Card, Button, Image, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { ConnectedReduxProps } from '../../redux/reducers/root.reducer';
import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers/root.reducer';
import { customerUserInterface, customerDashboardInterface } from '../../redux/reducers/server-reducer/server.reducer';
import { fetchCustomerDashboardAction } from '../../redux/actions/server/server.actions';
import CONFIG from '../../config/config';

interface PropsFromState {
    customerUser: customerUserInterface;
    customerDashboard: customerDashboardInterface;
}

interface PropsFromDispatch {
    fetchCustomerDashboardAction: typeof fetchCustomerDashboardAction;
}

type CustomerDashboardPageAllProps = PropsFromDispatch & RouteComponentProps & ConnectedReduxProps & PropsFromState;

export class CustomerDashboard extends React.Component<CustomerDashboardPageAllProps> {
    componentDidMount() {
        this.props.fetchCustomerDashboardAction();
    }

    renderUpcomingBookings = () => {
        const rows = [];

        this.props.customerDashboard.upcomingBookings.forEach((booking, index) => {
            rows.push(
                <tr key={booking._id}>
                    <td>{index + 1}</td>
                    <td>{booking.client}</td>
                    <td>{booking.time}</td>
                    <td>{booking.email}</td>
                    <td>{booking.listing}</td>
                    <td>{booking.price}</td>
                </tr>,
            );
        });
        return rows;
    };
    renderPastBookings = () => {
        const rows = [];

        this.props.customerDashboard.pastBookings.forEach((booking, index) => {
            rows.push(
                <tr key={booking._id}>
                    <td>{index + 1}</td>
                    <td>{booking.client}</td>
                    <td>{booking.time}</td>
                    <td>{booking.email}</td>
                    <td>{booking.listing}</td>
                    <td>{booking.price}</td>
                </tr>,
            );
        });
        return rows;
    };

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
                                        <Image src={customerUser.phoneUrl} rounded />
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

const mapDispatchToProps = {
    fetchCustomerDashboardAction,
};
const mapStateToProps = (state: ApplicationState) => ({
    customerUser: state.server.customerUser,
    customerDashboard: state.server.customerDashboard,
});
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(CustomerDashboard),
);
