import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { ApplicationState, ConnectedReduxProps } from '../../../redux/reducers/root.reducer';
import { CustomerUser } from '../../../interfaces/customer-user';

interface PropsFromState {
    customerUser: CustomerUser;
}

// interface PropsFromDispatch {
//     customerProfileUpdateAction: typeof customerProfileUpdateAction;
// }
type CustomerProfilePageAllProps = RouteComponentProps & ConnectedReduxProps & PropsFromState;

export class CustomerProfileUpdate extends React.Component<CustomerProfilePageAllProps> {
    public render() {
        return (
            <Container fluid>
                <h1>Work in progress..</h1>
            </Container>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    customerUser: state.server.customerUser,
});
export default withRouter(
    connect(
        mapStateToProps,
        null,
    )(CustomerProfileUpdate),
);
