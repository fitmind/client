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
import { CustomerUser } from '../../../interfaces/customer-user';
import { Booking } from '../../../interfaces/booking';
import { formatDate } from '../../../utils/format-date';

interface PropsFromState {
    customerUser: CustomerUser;
}

interface PropsFromDispatch {
    getCustomerUserAction: typeof getCustomerUserAction;
}

type CustomerDashboardPageAllProps = PropsFromDispatch & RouteComponentProps & ConnectedReduxProps & PropsFromState;

function renderBookings(bookings: Booking[], history) {
    const rows = [];

    bookings.forEach(booking => {
        rows.push(
            <tr
                key={booking._id}
                style={{ cursor: 'pointer' }}
                onClick={() => history.push(CONFIG.routes.NavigateToBooking(booking._id))}
            >
                <td>{formatDate(booking.time)}</td>
                <td>{booking.listing.postCode}</td>
                <td>{booking.listing.name}</td>
                <td>{booking.listing.price}</td>
                <td>{booking.expert.name}</td>
                <td>{booking.listing.expertiseArea}</td>
            </tr>,
        );
    });
    return rows;
}

const renderHeaders = () => (
    <thead>
        <tr>
            <th>Time</th>
            <th>Location</th>
            <th>Listing</th>
            <th>Price</th>
            <th>Expert</th>
            <th>Expertise</th>
        </tr>
    </thead>
);

const CustomerDashboard: React.FC<CustomerDashboardPageAllProps> = ({
    customerUser,
    getCustomerUserAction,
    history,
}) => {
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
            <Row className={'mt-4 mb-5'}>
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
                                {renderHeaders()}
                                <tbody>{renderBookings(customerUser.futureBookings, history)}</tbody>
                            </Table>
                        </div>
                    )}
                    {customerUser.pastBookings.length === 0 && (
                        <div className={'mt-5 text-center'}>
                            <Header as={'h4'}>You dont have any bookings in the past</Header>
                        </div>
                    )}
                    {customerUser.pastBookings.length > 0 && (
                        <div className={'mt-5'}>
                            <h3>Past Appointments</h3>
                            <Table responsive="md" hover bordered>
                                {renderHeaders()}
                                <tbody>{renderBookings(customerUser.pastBookings, history)}</tbody>
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
