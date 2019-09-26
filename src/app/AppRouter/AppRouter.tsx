import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadingComponent from '../../atoms/Loading/Loading';
import Notification from '../../atoms/Notification/Notification';
import CONFIG from '../../config/config';
import CustomerDashboard from '../../ecosystems/customer-user/customer-dashboard/customer-dashboard';
import LoginPage from '../../ecosystems/customer-user/customer-login/customer-login';
import CustomerProfileUpdatePage from '../../ecosystems/customer-user/customer-profile-update/CustomerProfileUpdate.page';
import ExpertDashboardPage from '../../ecosystems/expert-user/expert-dashboard/expert-dashboard';
import ExpertLoginPage from '../../ecosystems/expert-user/expert-login/ExpertLogin.page';
import ExpertProfileUpdate from '../../ecosystems/expert-user/expert-profile-update/ExpertProfileUpdate.page';
import ExpertSignUpPage from '../../ecosystems/expert-user/expert-register/expert-register';
import Home from '../../ecosystems/home/Home.page';
import ListingsPage from '../../ecosystems/listings/Listings.page';
import ListingSinglePage from '../../ecosystems/listing-single/ListingsSingle.page';
import ExpertPublicPage from '../../ecosystems/expert-user/expert-public-page/ExpertPublicPage';
import NotFoundPage from '../../ecosystems/not-found-page/NotFound.page';
import NavBar from '../../molecules/Navbar/Navbar';
import BookingPage from '../../ecosystems/booking/BookingPage';
import CustomerRegister from '../../ecosystems/customer-user/customer-register/customer-register';

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
            <Route path={CONFIG.routes.customerRegister} exact component={CustomerRegister} />
            <Route path={CONFIG.routes.expertLogin} exact component={ExpertLoginPage} />
            <Route path={CONFIG.routes.expertDashboard} exact component={ExpertDashboardPage} />
            <Route path={CONFIG.routes.expertSignUp} exact component={ExpertSignUpPage} />
            <Route path={CONFIG.routes.expertProfileUpdate} exact component={ExpertProfileUpdate} />
            <Route path={CONFIG.routes.listings} exact component={ListingsPage} />
            <Route path={CONFIG.routes.listing} exact component={ListingSinglePage} />
            <Route path={CONFIG.routes.singleBooking} exact component={BookingPage} />
            <Route path={CONFIG.routes.expertPublicPage} exact component={ExpertPublicPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
);

export default AppRouter;
