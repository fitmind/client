import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Container, Row, Col, Table, Jumbotron } from 'react-bootstrap';
import { ConnectedReduxProps } from '../../../redux/reducers/root.reducer';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../redux/reducers/root.reducer';
import Header from '../../../atoms/Header/Header';
import Paragraph from '../../../atoms/Paragraph/Paragraph';
import CONFIG from '../../../config/config';
import { getCustomerUserAction } from './customer-dashboard.actions';
import { customerUser } from '../../../interfaces/customer-user';
import { Booking } from '../../../interfaces/booking';

interface PropsFromState {
    customerUser: customerUser;
}

interface PropsFromDispatch {
    getCustomerUserAction: typeof getCustomerUserAction;
}

type CustomerDashboardPageAllProps = PropsFromDispatch & RouteComponentProps & ConnectedReduxProps & PropsFromState;

function renderBookings(bookings: Booking[]) {
    const rows = [];

    bookings.forEach(booking => {
        rows.push(
            <tr
                key={booking._id}
                style={{ cursor: 'pointer' }}
                onClick={() => this.props.history.push(CONFIG.routes.NavigateToBooking(booking._id))}
            >
                <td>{booking._id}</td>
                <td>{booking.time}</td>
            </tr>,
        );
    });
    return rows;
}

const CustomerDashboard: React.FC<CustomerDashboardPageAllProps> = ({ customerUser, getCustomerUserAction }) => {
    useEffect(() => {
        getCustomerUserAction();
    }, [getCustomerUserAction]);

    return (
        <Container fluid>
            <Jumbotron>
                <Header as={'h2'}>Welcome {customerUser.name}!</Header>
                <Paragraph as={'m'}>
                    Here you will be able to look at your upcoming and past appointments. Message your coaches and get
                    insights on your improvements!
                </Paragraph>
            </Jumbotron>
            <Row className={'mt-4'}>
                <Col md={1} />
                <Col md={10}>
                    {customerUser.futureBookings.length === 0 && (
                        <div className={'mt-5 text-center'}>
                            <Header as={'h4'}>You dont have any upcoming bookings</Header>
                        </div>
                    )}
                    {customerUser.futureBookings.length > 0 && (
                        <div>
                            <h3>Upcoming Appointments</h3>
                            <Table responsive="md" hover bordered>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customerUser &&
                                        customerUser.futureBookings &&
                                        renderBookings(customerUser.futureBookings)}
                                </tbody>
                            </Table>
                        </div>
                    )}
                    {customerUser.pastBookings.length === 0 && (
                        <div className={'mt-5 text-center'}>
                            <Header as={'h4'}>You dont have any bookings in the past</Header>
                        </div>
                    )}
                    {customerUser.pastBookings.length > 0 && (
                        <div>
                            <h3>Past Appointments</h3>
                            <Table responsive="md" hover bordered>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customerUser &&
                                        customerUser.pastBookings &&
                                        renderBookings(customerUser.pastBookings)}
                                </tbody>
                            </Table>
                        </div>
                    )}
                </Col>
                <Col md={1} />
            </Row>
        </Container>
    );
};

const mapDispatchToProps = {
    getCustomerUserAction,
};
const mapStateToProps = (state: ApplicationState) => ({
    customerUser: state.server.customerUser,
});
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(CustomerDashboard),
);
