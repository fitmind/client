import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers/root.reducer';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';
import { NotificationInterface } from '../../interfaces/Notification.interface';

interface PropsFromState {
    notification: NotificationInterface;
}

const PositiveAlertDismissible: React.FC<NotificationInterface> = ({ header, body }) => {
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
                {header && <Alert.Heading>{header}</Alert.Heading>}
                {body && <p>{body}</p>}
            </Alert>
        );
    }
};

const NegativeAlertDismissible: React.FC<NotificationInterface> = ({ header, body }) => {
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                {header && <Alert.Heading>{header}</Alert.Heading>}
                {body && <p>{body}</p>}
            </Alert>
        );
    }
};

const Notification: React.FC<PropsFromState> = ({ notification }) => (
    <Wrapper>
        {notification.type === 'positive' && <PositiveAlertDismissible {...notification} />}
        {notification.type === 'error' && <NegativeAlertDismissible {...notification} />}
    </Wrapper>
);

const mapStateToProps = (state: ApplicationState) => ({
    notification: state.ui.notification,
});

export default connect(
    mapStateToProps,
    null,
)(Notification);

const Wrapper = styled.div`
    text-align: center;
`;
