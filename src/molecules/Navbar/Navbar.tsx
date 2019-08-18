import { Navbar, Nav, Button, ButtonGroup } from 'react-bootstrap';
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import CONFIG from '../../config/config';
import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers/root.reducer';
import { expertUserInterface, customerUserInterface } from '../../redux/reducers/server-reducer/server.reducer';
import { userLogoutAction } from '../../redux/actions/server/server.actions';

interface PropsFromState {
    expert: expertUserInterface;
    customerUser: customerUserInterface;
}

interface PropsFromDispatch {
    userLogoutAction: typeof userLogoutAction;
}
type allProps = PropsFromState & RouteComponentProps & PropsFromDispatch;

const NavBar: React.FC<allProps> = ({ expert, customerUser, history, userLogoutAction }) => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={() => history.push(CONFIG.routes.home)}>Fitmind</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link>Listings</Nav.Link>
                <Nav.Link>About</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
            </Nav>
            {customerUser._id && (
                <ButtonGroup className="mr-2">
                    <Button variant="outline-primary" onClick={() => history.push(CONFIG.routes.customerDashboard)}>
                        Dashboard
                    </Button>
                </ButtonGroup>
            )}
            {!customerUser._id && (
                <ButtonGroup className="mr-2">
                    <Button variant="outline-primary" onClick={() => history.push(CONFIG.routes.customerLogin)}>
                        Customers
                    </Button>
                </ButtonGroup>
            )}
            {expert._id && (
                <Button variant="outline-secondary" onClick={() => history.push(CONFIG.routes.expertDashboard)}>
                    Dashboard
                </Button>
            )}
            {!customerUser._id && !expert._id && (
                <Button variant="outline-secondary" onClick={() => history.push(CONFIG.routes.expertLogin)}>
                    Experts
                </Button>
            )}
            {customerUser._id && (
                <Button variant="outline-secondary" onClick={() => userLogoutAction()}>
                    Customer Logout
                </Button>
            )}
        </Navbar.Collapse>
    </Navbar>
);

const mapDispatchToProps = {
    userLogoutAction,
};

const mapStateToProps = (state: ApplicationState) => ({
    expert: state.server.expertUser,
    customerUser: state.server.customerUser,
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(NavBar),
);
