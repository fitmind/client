import React from 'react';
import { Col, Container, Jumbotron, Row, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { bookingInterface } from '../../interfaces/responses/expert-dashboard-response';
import { ListingInterface } from '../../interfaces/responses/listing-response';
import { fetchExpertDashboardAction, fetchExpertUserAction } from '../../redux/actions/server/server.actions';
import { ApplicationState, ConnectedReduxProps } from '../../redux/reducers/root.reducer';
import { expertDashboardInterface, expertUserInterface } from '../../redux/reducers/server-reducer/server.reducer';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Header from '../../atoms/Header/Header';

interface PropsFromState {
    expertUser: expertUserInterface;
    expertDashboard: expertDashboardInterface;
}

interface PropsFromDispatch {
    fetchExpertDashboardAction: typeof fetchExpertDashboardAction;
    fetchExpertUserAction: typeof fetchExpertUserAction;
}

type ExpertDashboardPageAllProps = PropsFromDispatch & RouteComponentProps & ConnectedReduxProps & PropsFromState;

export class ExpertDashboard extends React.Component<ExpertDashboardPageAllProps> {
    public componentDidMount() {
        this.props.fetchExpertDashboardAction();
        this.props.fetchExpertUserAction();
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
    public renderListings = (listings: ListingInterface[]) => {
        const rows = [];

        listings.forEach((listing, index) => {
            rows.push(
                <tr key={listing._id}>
                    <td>{index + 1}</td>
                    <td>{listing.name}</td>
                    <td>{listing.description}</td>
                    <td>{listing.price}</td>
                </tr>,
            );
        });
        return rows;
    };

    public render() {
        const { expertUser } = this.props;
        return (
            <Container fluid>
                <Jumbotron>
                    <Header as={'h2'}>Welcome {expertUser.firstName}!</Header>
                    <Paragraph as={'m'}>
                        As an approved expert - here you will be able to create, update and remove listings. View your
                        upcoming schedule and keep records of your clients.
                    </Paragraph>
                </Jumbotron>
                <Row>
                    <Col md={1} />
                    <Col md={10} className={'mt-5'}>
                        <h3>Current Listings Live</h3>
                        <Table responsive="md">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Listing name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.expertDashboard &&
                                    this.props.expertDashboard.liveListings &&
                                    this.renderListings(this.props.expertDashboard.liveListings)}
                            </tbody>
                        </Table>
                        <h3>Upcoming appointments</h3>
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
                                {this.props.expertDashboard &&
                                    this.props.expertDashboard.upcomingBookings &&
                                    this.renderBookings(this.props.expertDashboard.upcomingBookings)}
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
    fetchExpertDashboardAction,
    fetchExpertUserAction,
};
const mapStateToProps = (state: ApplicationState) => ({
    expertUser: state.server.expertUser,
    expertDashboard: state.server.expertDashboard,
});
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(ExpertDashboard),
);