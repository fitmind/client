import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoadingComponent from '../../atoms/Loading/Loading';
import Notification from '../../atoms/Notification/Notification';
import CONFIG from '../../config/config';
import CustomerDashboard from '../../ecosystems/customer-user/customer-dashboard/customer-dashboard';
import LoginPage from '../../ecosystems/customer-user/customer-login/customer-login';
import CustomerProfileUpdatePage from '../../ecosystems/customer-user/customer-profile-update/CustomerProfileUpdate.page';
import ExpertDashboardPage from '../../ecosystems/expert-user/expert-dashboard/expert-dashboard';
import ExpertLoginPage from '../../ecosystems/expert-user/expert-login/expert-login.page';
import ExpertProfileUpdate from '../../ecosystems/expert-user/expert-profile-update/ExpertProfileUpdate.page';
import ExpertSignUpPage from '../../ecosystems/expert-user/expert-register/expert-register';
import Home from '../../ecosystems/home/Home.page';
import ListingsPage from '../../ecosystems/listings-page/listings-page';
import ListingSinglePage from '../../ecosystems/listing-single/ListingsSingle.page';
import ExpertPublicPage from '../../ecosystems/expert-user/expert-public-page/ExpertPublicPage';
import NotFoundPage from '../../ecosystems/not-found-page/NotFound.page';
import NavBar from '../../molecules/Navbar/Navbar';
import BookingPage from '../../ecosystems/booking/BookingPage';
import CustomerRegister from '../../ecosystems/customer-user/customer-register/customer-register';
import { ApplicationState } from '../../redux/reducers/root.reducer';
import { connect } from 'react-redux';
import ListingCreate from '../../ecosystems/expert-user/listing-create/listing-create';

interface MapStateToProps {
    expertLoggedIn: boolean;
    customerLoggedIn: boolean;
}

type AllProps = MapStateToProps;

const CustomerPrivateRoute = ({ component, isAuthenticated, ...rest }) => {
    const routeComponent = props =>
        isAuthenticated ? (
            React.createElement(component, props)
        ) : (
            <Redirect to={{ pathname: CONFIG.routes.customerLogin }} />
        );
    return <Route {...rest} render={routeComponent} />;
};

const ExpertPrivateRoute = ({ component, isAuthenticated, ...rest }) => {
    const routeComponent = props =>
        isAuthenticated ? (
            React.createElement(component, props)
        ) : (
            <Redirect to={{ pathname: CONFIG.routes.expertLogin }} />
        );
    return <Route {...rest} render={routeComponent} />;
};

const AppRouter: React.FC<AllProps> = ({ expertLoggedIn, customerLoggedIn }) => (
    <div>
        <NavBar />
        <LoadingComponent />
        <Notification />
        <Switch>
            <Route path={CONFIG.routes.home} exact component={Home} />
            <Route path={CONFIG.routes.customerLogin} exact component={LoginPage} />
            <CustomerPrivateRoute
                isAuthenticated={customerLoggedIn}
                path={CONFIG.routes.customerProfileUpdate}
                exact
                component={CustomerProfileUpdatePage}
            />
            <CustomerPrivateRoute
                isAuthenticated={customerLoggedIn}
                path={CONFIG.routes.customerDashboard}
                exact
                component={CustomerDashboard}
            />
            <Route path={CONFIG.routes.customerRegister} exact component={CustomerRegister} />
            <Route path={CONFIG.routes.expertLogin} exact component={ExpertLoginPage} />
            <ExpertPrivateRoute
                isAuthenticated={expertLoggedIn}
                path={CONFIG.routes.expertDashboard}
                exact
                component={ExpertDashboardPage}
            />
            <Route path={CONFIG.routes.expertSignUp} exact component={ExpertSignUpPage} />
            <ExpertPrivateRoute
                isAuthenticated={expertLoggedIn}
                path={CONFIG.routes.expertProfileUpdate}
                exact
                component={ExpertProfileUpdate}
            />
            <ExpertPrivateRoute
                isAuthenticated={expertLoggedIn}
                path={CONFIG.routes.expertCreateListing}
                exact
                component={ListingCreate}
            />
            <Route path={CONFIG.routes.listings} exact component={ListingsPage} />
            <Route path={CONFIG.routes.listing} exact component={ListingSinglePage} />
            <Route path={CONFIG.routes.singleBooking} exact component={BookingPage} />
            <Route path={CONFIG.routes.expertPublicPage} exact component={ExpertPublicPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
);

const mapStateToProps = (state: ApplicationState) => ({
    customerLoggedIn: state.server.customerLoggedIn,
    expertLoggedIn: state.server.expertLoggedIn,
});

export default connect(
    mapStateToProps,
    null,
)(AppRouter);
