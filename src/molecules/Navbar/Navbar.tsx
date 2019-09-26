import React from 'react';
import { Button, ButtonGroup, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import CONFIG from '../../config/config';
import { ApplicationState } from '../../redux/reducers/root.reducer';
import { customerUserLogoutAction } from '../../redux/flows/customer-logout/customer-logout-action';
import { bindActionCreators } from 'redux';
import { CustomerUser } from '../../interfaces/customer-user';
import { ExpertUser } from '../../interfaces/expert-user';
import { expertUserLogoutAction } from '../../redux/flows/expert-logout/expert-logout-action';

interface PropsFromState {
    customerUser: CustomerUser;
    expertUser: ExpertUser;
}

interface PropsFromDispatch {
    customerUserLogoutAction: typeof customerUserLogoutAction;
    expertUserLogoutAction: typeof expertUserLogoutAction;
}

type allProps = PropsFromState & RouteComponentProps & PropsFromDispatch;

const NavBar: React.FC<allProps> = ({
    customerUser,
    expertUser,
    customerUserLogoutAction,
    expertUserLogoutAction,
    history,
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

            {customerUser.id && (
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
            {!customerUser.id && !expertUser.id && (
                <ButtonGroup className="mr-2">
                    <Button variant="outline-primary" onClick={() => history.push(CONFIG.routes.customerLogin)}>
                        Customers
                    </Button>
                </ButtonGroup>
            )}
            {expertUser.id && (
                <Button
                    variant="outline-secondary"
                    className={'mr-2'}
                    onClick={() => history.push(CONFIG.routes.expertDashboard)}
                >
                    Dashboard
                </Button>
            )}
            {!customerUser.id && !expertUser.id && (
                <Button variant="outline-secondary" onClick={() => history.push(CONFIG.routes.expertLogin)}>
                    Experts
                </Button>
            )}
            {customerUser.id && (
                <Button
                    variant="outline-secondary"
                    className={'mr-2'}
                    onClick={() => history.push(CONFIG.routes.customerProfileUpdate)}
                >
                    Edit Profile
                </Button>
            )}
            {customerUser.id && (
                <Button variant="outline-secondary" onClick={() => customerUserLogoutAction()}>
                    Customer Logout
                </Button>
            )}
            {expertUser.id && (
                <Button
                    variant="outline-secondary"
                    className="mr-2"
                    onClick={() => history.push(CONFIG.routes.expertProfileUpdate)}
                >
                    Edit Profile
                </Button>
            )}
            {expertUser.id && (
                <Button variant="outline-secondary" onClick={() => expertUserLogoutAction()}>
                    Expert Logout
                </Button>
            )}
        </Navbar.Collapse>
    </Navbar>
);

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            customerUserLogoutAction,
            expertUserLogoutAction,
        },
        dispatch,
    );

const mapStateToProps = (state: ApplicationState) => ({
    customerUser: state.server.customerUser,
    expertUser: state.server.expertUser,
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(NavBar),
);
