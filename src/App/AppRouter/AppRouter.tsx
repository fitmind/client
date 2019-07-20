import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import LoginPageWithRouter from '../../ecosystems/Login/Login.page';
import CONFIG from '../../config';
import NotFoundPage from '../../ecosystems/NotFound/NotFound.page';
import ExpertReviewPage from '../../ecosystems/ExpertReview/ExpertReview.page';
import ListingReviewPage from '../../ecosystems/ListingReview/ListingReview.page';
import NavBar from '../../molecules/Navbar/Navbar';
import Home from '../../ecosystems/Home/Home.page';

const AppRouter: React.FC = () => (
    <div>
        <NavBar />
        <Switch>
            <Route path={CONFIG.routes.home} exact component={Home} />
            <Route path={CONFIG.routes.customerLogin} exact component={LoginPageWithRouter} />
            <Route path={CONFIG.routes.expert} component={ExpertReviewPage} />
            <Route path={CONFIG.routes.listing} component={ListingReviewPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
);

export default withRouter(AppRouter);
