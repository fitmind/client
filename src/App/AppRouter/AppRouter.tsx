import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../../ecosystems/Login/Login.page';
import CONFIG from '../../config';
import NotFoundPage from '../../ecosystems/NotFound/NotFound.page';
import ExpertReviewPage from '../../ecosystems/ExpertReview/ExpertReview.page';
import ListingReviewPage from '../../ecosystems/ListingReview/ListingReview.page';
import NavBar from '../../molecules/Navbar/Navbar';
import Home from '../../ecosystems/Home/Home.page';
import LoadingComponent from '../../atoms/Loading/Loading';
import Notification from '../../atoms/Notification/Notification';
import CustomerDashboard from '../../ecosystems/CustomerDashboard/CustomerDashboard';

const AppRouter: React.FC = () => (
    <div>
        <NavBar />
        <LoadingComponent />
        <Notification />
        <Switch>
            <Route path={CONFIG.routes.home} exact component={Home} />
            <Route path={CONFIG.routes.customerLogin} exact component={LoginPage} />
            <Route path={CONFIG.routes.customerDashboard} exact component={CustomerDashboard} />
            <Route path={CONFIG.routes.expert} component={ExpertReviewPage} />
            <Route path={CONFIG.routes.listing} component={ListingReviewPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
);

export default AppRouter;
