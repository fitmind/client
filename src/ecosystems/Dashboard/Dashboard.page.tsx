import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';

import dashboardData from './dashboard-mock-data.json';
import { withRouter, RouteComponentProps } from 'react-router';
import CONFIG from '../../config';

interface ExpertsData {
    id: number;
    name: string;
    email: string;
    phone: string;
    location: string;
    submittedDate: string;
}

interface ExpertTableProps {
    data: ExpertsData[];
    history: any;
    header: string;
}

const ExpertTable: React.FC<ExpertTableProps> = ({ data, history, header }) => (
    <TableWrapper>
        <h2>{header}</h2>
        <Table bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Location</th>
                    <th>Submited Date</th>
                </tr>
            </thead>
            {/* <tbody>
                {data.map((expert, index) => (
                    <TableRow
                        key={expert.email}
                        onClick={() => history.push(CONFIG.routes.NavigateToExpert(expert.id))}
                    >
                        <td>{index}</td>
                        <td>{expert.name}</td>
                        <td>{expert.email}</td>
                        <td>{expert.phone}</td>
                        <td>{expert.location}</td>
                        <td>{expert.submittedDate}</td>
                    </TableRow>
                ))}
            </tbody> */}
        </Table>
    </TableWrapper>
);

interface ListingsData {
    id: number;
    coachName: string;
    listingName: string;
    email: string;
    submittedDate: string;
}

interface ListingsTableProps {
    data: ListingsData[];
    history: any;
    header: string;
}

const ListingTable: React.FC<ListingsTableProps> = ({ data, history, header }) => (
    <TableWrapper>
        <h2>{header}</h2>
        <Table bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Coach name</th>
                    <th>Listing Name</th>
                    <th>Email</th>
                    <th>Submitted</th>
                </tr>
            </thead>
            <tbody>
                {data.map((expertListing, index) => (
                    <TableRow
                        key={expertListing.email}
                        onClick={() => history.push(CONFIG.routes.NavigateToListing(expertListing.id))}
                    >
                        <td>{index}</td>
                        <td>{expertListing.coachName}</td>
                        <td>{expertListing.listingName}</td>
                        <td>{expertListing.email}</td>
                        <td>{expertListing.submittedDate}</td>
                    </TableRow>
                ))}
            </tbody>
        </Table>
    </TableWrapper>
);

const categories = [
    {
        title: 'Experts',
        experts: {
            data: dashboardData.personalTrainersExperts,
            header: 'Pending personal trainer experts',
        },
        listings: {
            data: dashboardData.personalTrainerListings,
            header: 'Pending personal trainer listings',
        },
    },
    {
        title: 'Yoga',
        experts: {
            data: dashboardData.yogaTrainersExperts,
            header: 'Yoga trainer experts',
        },
        listings: {
            data: dashboardData.yogaListings,
            header: 'yoga trainer listings',
        },
    },
    {
        title: 'Life',
        experts: {
            data: dashboardData.lifeCoachTrainersExperts,
            header: 'Life coach trainer experts',
        },
        listings: {
            data: dashboardData.lifeCoachListings,
            header: 'Life coach listings',
        },
    },
];

class DashboardPage extends React.Component<RouteComponentProps> {
    public render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1>Welcome Ada!</h1>
                            <p>
                                Here you will be able to review the pending listings and experts waiting to be approved.
                            </p>
                        </Jumbotron>
                        {categories.map(category => (
                            <div key={category.title}>
                                <ExpertTable
                                    data={category.experts.data}
                                    history={this.props.history}
                                    header={category.experts.header}
                                />
                                <ListingTable
                                    data={category.listings.data}
                                    history={this.props.history}
                                    header={category.listings.header}
                                />
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(DashboardPage);

const TableWrapper = styled.div`
    margin-top: 5rem;
`;

const TableRow = styled.tr`
    cursor: pointer;
`;
