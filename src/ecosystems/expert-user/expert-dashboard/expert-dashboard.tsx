import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { ApplicationState, ConnectedReduxProps } from '../../../redux/reducers/root.reducer';
import { ExpertUser } from '../../../interfaces/expert-user';
import { getExpertUserAction } from './expert-dashboard.actions';
import { Col, Container, Jumbotron, Row, Table } from 'react-bootstrap';
import Header from '../../../atoms/Header/Header';
import Paragraph from '../../../atoms/Paragraph/Paragraph';
import { Booking } from '../../../interfaces/booking';
import CONFIG from '../../../config/config';
import { formatDate } from '../../../utils/format-date';

interface PropsFromState {
    expertUser: ExpertUser;
}

interface PropsFromDispatch {
    getExpertUserAction: typeof getExpertUserAction;
}

type ExpertDashboardPageAllProps = RouteComponentProps & ConnectedReduxProps & PropsFromState & PropsFromDispatch;

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
                <td>{booking.customer.name}</td>
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
            <th>Customer</th>
            <th>Expertise</th>
        </tr>
    </thead>
);

const ExpertDashboard: React.FC<ExpertDashboardPageAllProps> = ({ getExpertUserAction, expertUser, history }) => {
    useEffect(() => {
        getExpertUserAction();
    }, [getExpertUserAction]);

    return (
        <Container fluid>
            {expertUser.approvedStatus === CONFIG.approvedStatus.PENDING && (
                <Jumbotron>
                    <Header as={'h2'}>Welcome {expertUser.name}!</Header>
                    <Paragraph as={'m'}>
                        You are currently in the process of being reviewed, an administrator should be in touch with you
                        briefly regarding your application
                    </Paragraph>
                </Jumbotron>
            )}
            {expertUser.approvedStatus === CONFIG.approvedStatus.DENIED && (
                <Jumbotron>
                    <Header as={'h2'}>Welcome {expertUser.name}!</Header>
                    <Paragraph as={'m'}>
                        Unfortunately you have not been approved to use the platform, please get in touch with an
                        administrator to talk about your application
                    </Paragraph>
                </Jumbotron>
            )}
            {expertUser.approvedStatus === CONFIG.approvedStatus.APPROVED && (
                <div>
                    <Jumbotron>
                        <Header as={'h2'}>Welcome {expertUser.name}!</Header>
                        <Paragraph as={'m'}>
                            Here you will be able to look at your upcoming and past appointments.
                        </Paragraph>
                    </Jumbotron>
                    <Row className={'mt-5 mb-5'}>
                        <Col md={1} />
                        <Col md={10}>
                            {expertUser.futureBookings.length === 0 && (
                                <div className={'mt-5 text-center'}>
                                    <Header as={'h4'}>You dont have any upcoming bookings</Header>
                                </div>
                            )}
                            {expertUser.futureBookings.length > 0 && (
                                <div>
                                    <h3>Upcoming Appointments</h3>
                                    <Table responsive="md" hover bordered>
                                        {renderHeaders()}
                                        <tbody>
                                            {expertUser &&
                                                expertUser.futureBookings &&
                                                renderBookings(expertUser.futureBookings, history)}
                                        </tbody>
                                    </Table>
                                </div>
                            )}
                            {expertUser.pastBookings.length === 0 && (
                                <div className={'mt-5 text-center'}>
                                    <Header as={'h4'}>You dont have any bookings in the past</Header>
                                </div>
                            )}
                            {expertUser.pastBookings.length > 0 && (
                                <div className={'mt-5'}>
                                    <h3>Past Appointments</h3>
                                    <Table responsive="md" hover bordered>
                                        {renderHeaders()}
                                        <tbody>
                                            {expertUser &&
                                                expertUser.pastBookings &&
                                                renderBookings(expertUser.pastBookings, history)}
                                        </tbody>
                                    </Table>
                                </div>
                            )}
                        </Col>
                        <Col md={1} />
                    </Row>
                </div>
            )}
        </Container>
    );
};

const mapDispatchToProps = {
    getExpertUserAction,
};

const mapStateToProps = (state: ApplicationState) => ({
    expertUser: state.server.expertUser,
});
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(ExpertDashboard),
);
