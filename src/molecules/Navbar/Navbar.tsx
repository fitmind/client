import { Navbar, Nav, Button, ButtonGroup } from 'react-bootstrap';
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import CONFIG from '../../config';
import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers/root.reducer';
import { expertUserInterface, customerUserInterface } from '../../redux/reducers/server-reducer/server.reducer';

interface PropsFromState {
    expert: expertUserInterface;
    customerUser: customerUserInterface;
}

type allProps = PropsFromState & RouteComponentProps;

const NavBar: React.FC<allProps> = ({ expert, customerUser, history }) => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={() => history.push(CONFIG.routes.home)}>Fitmind</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Listings</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
            {customerUser._id && (
                <ButtonGroup className="mr-2">
                    <Button variant="outline-primary" onClick={() => history.push(CONFIG.routes.home)}>
                        Dashboard
                    </Button>
                </ButtonGroup>
            )}
            {!customerUser._id && (
                <ButtonGroup className="mr-2">
                    <Button variant="outline-primary" onClick={() => history.push(CONFIG.routes.home)}>
                        Customers
                    </Button>
                </ButtonGroup>
            )}
            {expert._id && (
                <Button variant="outline-secondary" onClick={() => history.push(CONFIG.routes.home)}>
                    Dashboard
                </Button>
            )}
            {!expert._id && (
                <Button variant="outline-secondary" onClick={() => history.push(CONFIG.routes.home)}>
                    Experts
                </Button>
            )}
        </Navbar.Collapse>
    </Navbar>
);

const mapStateToProps = (state: ApplicationState) => ({
    expert: state.server.expertUser,
    customerUser: state.server.customerUser,
});

export default withRouter(
    connect(
        mapStateToProps,
        null,
    )(NavBar),
);
