import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Container, Row, Col, Table, Jumbotron } from 'react-bootstrap';
import { ConnectedReduxProps } from '../../redux/reducers/root.reducer';
import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers/root.reducer';
import { customerUserInterface, customerDashboardInterface } from '../../redux/reducers/server-reducer/server.reducer';
import { fetchCustomerDashboardAction, fetchCustomerUserAction } from '../../redux/actions/server/server.actions';
import { bookingInterface } from '../../interfaces/responses/customer-dashboard-response';
import Header from '../../atoms/Header/Header';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import CONFIG from '../../config/config';

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

        bookings.forEach(booking => {
            rows.push(
                <tr
                    key={booking._id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => this.props.history.push(CONFIG.routes.NavigateToBooking(booking._id))}
                >
                    <td>{booking._id}</td>
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
                <Jumbotron>
                    <Header as={'h2'}>Welcome {customerUser.firstName}!</Header>
                    <Paragraph as={'m'}>
                        Here you will be able to look at your upcoming and past appointments. Message your coaches and
                        get insights on your improvements!
                    </Paragraph>
                </Jumbotron>
                <Row className={'mt-4'}>
                    <Col md={1} />
                    <Col md={10} className={'mb-3'}>
                        <h3>Upcoming Appointments</h3>
                        <Paragraph as={'sm'}>Click on one of the bookings to update it</Paragraph>
                        <Table responsive="md" hover bordered>
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
                        <Paragraph as={'sm'}>Click on one of the bookings to view it</Paragraph>
                        <Table responsive="md" hover bordered>
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
                    </Col>
                    <Col md={1} />
                </Row>
            </Container>
        );
    }
}

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
