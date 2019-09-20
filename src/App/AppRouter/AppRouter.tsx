import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoadingComponent from '../../atoms/Loading/Loading';
import Notification from '../../atoms/Notification/Notification';
import CONFIG from '../../config/config';
import CustomerDashboard from '../../ecosystems/CustomerDashboard/CustomerDashboard.page';
import LoginPage from '../../ecosystems/CustomerLogin/Login.page';
import CustomerProfileUpdatePage from '../../ecosystems/CustomerProfileUpdate/CustomerProfileUpdate.page';
import CustomerSignUpPage from '../../ecosystems/CustomerSignUp/CustomerSignUp.page';
import ExpertDashboardPage from '../../ecosystems/ExpertDashboard/ExpertDashboard.page';
import ExpertLoginPage from '../../ecosystems/ExpertLogin/ExpertLogin.page';
import ExpertProfileUpdate from '../../ecosystems/ExpertProfileUpdate/ExpertProfileUpdate.page';
import ExpertSignUpPage from '../../ecosystems/ExpertSignUp/ExpertSignUp.page';
import Home from '../../ecosystems/Home/Home.page';
import ListingsPage from '../../ecosystems/Listings/Listings.page';
import ListingSinglePage from '../../ecosystems/ListingsSingle/ListingsSingle.page';
import ExpertPublicPage from '../../ecosystems/ExpertPublicPage/ExpertPublicPage';
import NotFoundPage from '../../ecosystems/NotFound/NotFound.page';
import NavBar from '../../molecules/Navbar/Navbar';
import BookingPage from '../../ecosystems/BookingPage/BookingPage';
import ListingUpdate from '../../ecosystems/ListingUpdate/ListingUpdate';
import ListingCreate from '../../ecosystems/ListingCreate/ListingCreate';
import { connect } from 'react-redux';
import { ConnectedReduxProps } from '../../redux/reducers/root.reducer';
import { customerUserInterface, expertUserInterface } from '../../redux/reducers/server-reducer/server.reducer';

interface PropsFromState {
    expertUser?: expertUserInterface;
    customerUser?: customerUserInterface;
}

type AppRouterAllProps = ConnectedReduxProps & PropsFromState;

class AppRouter extends React.Component<AppRouterAllProps> {
    public CustomerPrivateRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                this.props.customerUser._id ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: CONFIG.routes.customerLogin,
                        }}
                    />
                )
            }
        />
    );

    public ExpertPrivateRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                this.props.expertUser._id ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: CONFIG.routes.expertLogin,
                        }}
                    />
                )
            }
        />
    );

    public render() {
        return (
            <div>
                <NavBar />
                <LoadingComponent />
                <Notification />
                <Switch>
                    <Route path={CONFIG.routes.home} exact component={Home} />
                    <Route path={CONFIG.routes.customerLogin} exact component={LoginPage} />
                    <this.CustomerPrivateRoute
                        path={CONFIG.routes.customerProfileUpdate}
                        exact
                        component={CustomerProfileUpdatePage}
                    />
                    <this.CustomerPrivateRoute path={CONFIG.routes.customerDashboard} component={CustomerDashboard} />
                    <Route path={CONFIG.routes.customerSignUp} exact component={CustomerSignUpPage} />
                    <Route path={CONFIG.routes.expertLogin} exact component={ExpertLoginPage} />
                    <this.ExpertPrivateRoute
                        path={CONFIG.routes.expertDashboard}
                        exact
                        component={ExpertDashboardPage}
                    />
                    <Route path={CONFIG.routes.expertSignUp} exact component={ExpertSignUpPage} />
                    <this.ExpertPrivateRoute
                        path={CONFIG.routes.expertProfileUpdate}
                        exact
                        component={ExpertProfileUpdate}
                    />
                    <Route path={CONFIG.routes.listings} exact component={ListingsPage} />
                    <this.ExpertPrivateRoute path={CONFIG.routes.listingUpdate} exact component={ListingUpdate} />
                    <Route path={CONFIG.routes.singleBooking} exact component={BookingPage} />
                    <Route path={CONFIG.routes.expertPublicPage} exact component={ExpertPublicPage} />
                    <this.ExpertPrivateRoute path={CONFIG.routes.listingCreate} exact component={ListingCreate} />
                    <Route path={CONFIG.routes.listing} exact component={ListingSinglePage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    customerUser: state.server.customerUser,
    expertUser: state.server.expertUser,
});

export default connect(mapStateToProps)(AppRouter);
