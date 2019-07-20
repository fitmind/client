import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ConnectedWeatherPage from '../../ecosystems/Weather/Weather.page';
import LoginPageWithRouter from '../../ecosystems/Login/Login.page';
import CONFIG from '../../config';
import DashboardPage from '../../ecosystems/Dashboard/Dashboard.page';
import NotFoundPage from '../../ecosystems/NotFound/NotFound.page';
import ExpertReviewPage from '../../ecosystems/ExpertReview/ExpertReview.page';
import ListingReviewPage from '../../ecosystems/ListingReview/ListingReview.page';
import NavBar from '../../molecules/Navbar/Navbar';

const AppRouter: React.FC = () => (
    <div>
        <NavBar />
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
