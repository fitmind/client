import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../../ecosystems/CustomerLogin/Login.page';
import CONFIG from '../../config/config';
import NotFoundPage from '../../ecosystems/NotFound/NotFound.page';
import NavBar from '../../molecules/Navbar/Navbar';
import Home from '../../ecosystems/Home/Home.page';
import LoadingComponent from '../../atoms/Loading/Loading';
import Notification from '../../atoms/Notification/Notification';
import CustomerDashboard from '../../ecosystems/CustomerDashboard/CustomerDashboard.page';
import CustomerSignUpPage from '../../ecosystems/CustomerSignUp/CustomerSignUp.page';
import ExpertLoginPage from '../../ecosystems/ExpertLogin/ExpertLogin.page';
import ExpertDashboardPage from '../../ecosystems/ExpertDashboard/ExpertDashboard.page';
import ListingsPage from '../../ecosystems/Listings/Listings.page';
import ListingSinglePage from '../../ecosystems/ListingsSingle/ListingsSingle.page';
import ExpertSignUpPage from '../../ecosystems/ExpertSignUp/ExpertSignUp.page';
import CustomerProfileUpdatePage from '../../ecosystems/CustomerProfileUpdate/CustomerProfileUpdate.page';

const AppRouter: React.FC = () => (
    <div>
        <NavBar />
        <LoadingComponent />
        <Notification />
        <Switch>
            <Route path={CONFIG.routes.home} exact component={Home} />
            <Route path={CONFIG.routes.customerLogin} exact component={LoginPage} />
            <Route path={CONFIG.routes.customerProfileUpdate} exact component={CustomerProfileUpdatePage} />
            <Route path={CONFIG.routes.customerDashboard} exact component={CustomerDashboard} />
            <Route path={CONFIG.routes.customerSignUp} exact component={CustomerSignUpPage} />
            <Route path={CONFIG.routes.expertLogin} exact component={ExpertLoginPage} />
            <Route path={CONFIG.routes.expertDashboard} exact component={ExpertDashboardPage} />
            <Route path={CONFIG.routes.expertSignUp} exact component={ExpertSignUpPage} />
            <Route path={CONFIG.routes.listings} exact component={ListingsPage} />
            <Route path={CONFIG.routes.listing} exact component={ListingSinglePage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
);

export default AppRouter;
