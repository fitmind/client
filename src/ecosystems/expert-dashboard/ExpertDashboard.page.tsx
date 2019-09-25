import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { ApplicationState, ConnectedReduxProps } from '../../redux/reducers/root.reducer';
import { expertUser } from '../../interfaces/expert-user';

interface PropsFromState {
    expertUser: expertUser;
}

type ExpertDashboardPageAllProps = RouteComponentProps & ConnectedReduxProps & PropsFromState;

export class ExpertDashboard extends React.Component<ExpertDashboardPageAllProps> {
    public render() {
        return (
            <Container fluid>
                <h1>Work in progress</h1>
                {/*<Jumbotron>*/}
                {/*    <Header as={'h2'}>Welcome {expertUser.firstName}!</Header>*/}
                {/*    <Paragraph as={'m'}>*/}
                {/*        As an approved expert - here you will be able to create, update and remove listings. View your*/}
                {/*        upcoming schedule and keep records of your clients.*/}
                {/*    </Paragraph>*/}
                {/*</Jumbotron>*/}
                {/*<Row>*/}
                {/*    <Col md={1} />*/}
                {/*    <Col md={10} className={'mt-5'}>*/}
                {/*        <h3>Current Listings Live</h3>*/}
                {/*        <Table responsive="md" hover bordered>*/}
                {/*            <thead>*/}
                {/*                <tr>*/}
                {/*                    <th>#</th>*/}
                {/*                    <th>Listing name</th>*/}
                {/*                    <th>Description</th>*/}
                {/*                    <th>Price</th>*/}
                {/*                </tr>*/}
                {/*            </thead>*/}
                {/*            <tbody>*/}
                {/*                {this.props.expertDashboard &&*/}
                {/*                    this.props.expertDashboard.liveListings &&*/}
                {/*                    this.renderListings(this.props.expertDashboard.liveListings)}*/}
                {/*            </tbody>*/}
                {/*        </Table>*/}
                {/*        <h3>Upcoming appointments</h3>*/}
                {/*        <Table responsive="md" hover bordered>*/}
                {/*            <thead>*/}
                {/*                <tr>*/}
                {/*                    <th>#</th>*/}
                {/*                    <th>Client</th>*/}
                {/*                    <th>Time</th>*/}
                {/*                    <th>Email</th>*/}
                {/*                    <th>Listing</th>*/}
                {/*                    <th>Price</th>*/}
                {/*                </tr>*/}
                {/*            </thead>*/}
                {/*            <tbody>*/}
                {/*                {this.props.expertDashboard &&*/}
                {/*                    this.props.expertDashboard.upcomingBookings &&*/}
                {/*                    this.renderBookings(this.props.expertDashboard.upcomingBookings)}*/}
                {/*            </tbody>*/}
                {/*        </Table>*/}
                {/*    </Col>*/}
                {/*    <Col md={1} />*/}
                {/*</Row>*/}
            </Container>
        );
    }
}

// const mapDispatchToProps = {
//     fetchExpertDashboardAction,
//     fetchExpertUserAction,
// };

const mapStateToProps = (state: ApplicationState) => ({
    expertUser: state.server.expertUser,
});
export default withRouter(
    connect(
        mapStateToProps,
        null,
    )(ExpertDashboard),
);
