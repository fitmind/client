import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Container, Row, Col, Table } from 'react-bootstrap';
import styled from 'styled-components';
import { ConnectedReduxProps } from '../../redux/reducers/root.reducer';
import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers/root.reducer';
import { customerUserInterface, customerDashboardInterface } from '../../redux/reducers/server-reducer/server.reducer';
import { fetchCustomerDashboardAction, fetchCustomerUserAction } from '../../redux/actions/server/server.actions';
import { bookingInterface } from '../../interfaces/responses/customer-dashboard-response';

interface PropsFromState {
    customerUser: customerUserInterface;
    customerDashboard: customerDashboardInterface;
}

interface PropsFromDispatch {
    fetchCustomerDashboardAction: typeof fetchCustomerDashboardAction;
    fetchCustomerUserAction: typeof fetchCustomerUserAction;
}

type CustomerDashboardPageAllProps = PropsFromDispatch & RouteComponentProps & ConnectedReduxProps & PropsFromState;

export class CustomerDashboard extends React.Component<CustomerDashboardPageAllProps> {
    public componentDidMount() {
        this.props.fetchCustomerDashboardAction();
        this.props.fetchCustomerUserAction();
    }

    public renderBookings = (bookings: bookingInterface[]) => {
        const rows = [];

        bookings.forEach((booking, index) => {
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

    public render() {
        const { customerUser } = this.props;
        return (
            <Container fluid>
                <Row>
                    <Col md={4} />
                    <Col>
                        <GreetingContainer>
                            <Greet>Welcome {customerUser.name}!</Greet>
                            <h5>
                                Here you will be able to look at your upcoming and past appointments. Message your
                                coaches and get insights on your improvements!
                            </h5>
                        </GreetingContainer>
                    </Col>
                    <Col md={4} />
                </Row>
                <Row>
                    <Col md={1} />
                    <Col md={10}>
                        <CardWrapper>
                            <h3>Upcoming Appointments</h3>
                            <Table responsive="md">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Client</th>
                                        <th>Time</th>
                                        <th>Email</th>
                                        <th>Listing</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.customerDashboard &&
                                        this.props.customerDashboard.upcomingBookings &&
                                        this.renderBookings(this.props.customerDashboard.upcomingBookings)}
                                </tbody>
                            </Table>
                            <h3>Past Appointments</h3>
                            <Table responsive="md">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Client</th>
                                        <th>Time</th>
                                        <th>Email</th>
                                        <th>Listing</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.customerDashboard &&
                                        this.props.customerDashboard.pastBookings &&
                                        this.renderBookings(this.props.customerDashboard.pastBookings)}
                                </tbody>
                            </Table>
                        </CardWrapper>
                    </Col>
                    <Col md={1} />
                </Row>
            </Container>
        );
    }
}

const GreetingContainer = styled.div`
    margin-top: 5rem;
    text-align: center;
`;
const Greet = styled.div`
    font-size: 4.5rem;
`;

const CardWrapper = styled.div`
    margin-top: 5rem;
`;

const mapDispatchToProps = {
    fetchCustomerDashboardAction,
    fetchCustomerUserAction,
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
