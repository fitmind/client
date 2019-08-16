import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Container, Row, Col, Table } from 'react-bootstrap';
import styled from 'styled-components';
import { ConnectedReduxProps } from '../../redux/reducers/root.reducer';
import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers/root.reducer';
import { customerUserInterface, customerDashboardInterface } from '../../redux/reducers/server-reducer/server.reducer';
import { fetchCustomerDashboardAction } from '../../redux/actions/server/server.actions';

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
                            <h3>Upcomimg Apppintments</h3>
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
                                        this.renderUpcomingBookings()}
                                </tbody>
                            </Table>
                            <h3>Past Apppintments</h3>
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
                                        this.renderPastBookings()}
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
