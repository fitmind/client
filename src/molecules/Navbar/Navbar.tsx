import React from 'react';
import { Button, ButtonGroup, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import CONFIG from '../../config/config';
import { expertLogoutAction, userLogoutAction } from '../../redux/actions/server/server.actions';
import { ApplicationState } from '../../redux/reducers/root.reducer';
import { customerUserInterface, expertUserInterface } from '../../redux/reducers/server-reducer/server.reducer';

interface PropsFromState {
    expert: expertUserInterface;
    customerUser: customerUserInterface;
    expertUser: expertUserInterface;
}

interface PropsFromDispatch {
    userLogoutAction: typeof userLogoutAction;
    expertLogoutAction: typeof expertLogoutAction;
}
type allProps = PropsFromState & RouteComponentProps & PropsFromDispatch;

const NavBar: React.FC<allProps> = ({
    expert,
    customerUser,
    history,
    userLogoutAction,
    expertUser,
    expertLogoutAction,
}) => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={() => history.push(CONFIG.routes.home)}>Fitmind</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link onClick={() => history.push(CONFIG.routes.listings)}>Listings</Nav.Link>
                <Nav.Link>About</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
            </Nav>

            {customerUser._id && (
                <ButtonGroup className="mr-2">
                    <Button
                        variant="outline-primary"
                        className={'mr-2'}
                        onClick={() => history.push(CONFIG.routes.customerDashboard)}
                    >
                        Dashboard
                    </Button>
                </ButtonGroup>
            )}
            {!customerUser._id && !expert._id && (
                <ButtonGroup className="mr-2">
                    <Button variant="outline-primary" onClick={() => history.push(CONFIG.routes.customerLogin)}>
                        Customers
                    </Button>
                </ButtonGroup>
            )}
            {expert._id && (
                <Button
                    variant="outline-secondary"
                    className={'mr-2'}
                    onClick={() => history.push(CONFIG.routes.expertDashboard)}
                >
                    Dashboard
                </Button>
            )}
            {!customerUser._id && !expert._id && (
                <Button variant="outline-secondary" onClick={() => history.push(CONFIG.routes.expertLogin)}>
                    Experts
                </Button>
            )}
            {customerUser._id && (
                <Button
                    variant="outline-secondary"
                    className={'mr-2'}
                    onClick={() => history.push(CONFIG.routes.customerProfileUpdate)}
                >
                    Edit Profile
                </Button>
            )}
            {customerUser._id && (
                <Button variant="outline-secondary" onClick={() => userLogoutAction()}>
                    Customer Logout
                </Button>
            )}
            {expertUser._id && (
                <Button
                    variant="outline-secondary"
                    className="mr-2"
                    onClick={() => history.push(CONFIG.routes.expertProfileUpdate)}
                >
                    Edit Profile
                </Button>
            )}
            {expertUser._id && (
                <Button variant="outline-secondary" onClick={() => expertLogoutAction()}>
                    Expert Logout
                </Button>
            )}
        </Navbar.Collapse>
    </Navbar>
);

const mapDispatchToProps = {
    userLogoutAction,
    expertLogoutAction,
};

const mapStateToProps = (state: ApplicationState) => ({
    expert: state.server.expertUser,
    customerUser: state.server.customerUser,
    expertUser: state.server.expertUser,
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(NavBar),
);
