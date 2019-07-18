import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ConnectedWeatherPage from '../../pages/Weather/Weather.page';
import LoginPageWithRouter from '../../pages/Login/Login.page';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CONFIG from '../../config';
import DashboardPage from '../../pages/Dashboard/Dashboard.page';
import NotFoundPage from '../../pages/NotFound/NotFound.page';
import ExpertReviewPage from '../../pages/ExpertReview/ExpertReview.page';
import ListingReviewPage from '../../pages/ListingReview/ListingReview.page';
import { RouteComponentProps } from 'react-router';

const AppRouter: React.FC<RouteComponentProps> = props => (
    <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand onClick={() => props.history.push(CONFIG.routes.login)}>FITMIND ADMIN</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link onClick={() => props.history.push(CONFIG.routes.login)}>Login</Nav.Link>
                <Nav.Link onClick={() => props.history.push(CONFIG.routes.dashboard)}>Dashboard</Nav.Link>
            </Nav>
        </Navbar>
        <Switch>
            <Route path={CONFIG.routes.login} exact component={LoginPageWithRouter} />
            <Route path="/weather" exact component={ConnectedWeatherPage} />
            <Route path={CONFIG.routes.dashboard} exact component={DashboardPage} />
            <Route path={CONFIG.routes.expert} component={ExpertReviewPage} />
            <Route path={CONFIG.routes.listing} component={ListingReviewPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
);

export default withRouter(AppRouter);
