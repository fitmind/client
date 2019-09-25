import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers/root.reducer';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';
import { NotificationType, Notification } from '../../interfaces/notification';

interface PropsFromState {
    notification: Notification;
}

const PositiveAlertDismissible: React.FC<Notification> = ({ header, body }) => {
    const [show, setShow] = useState(true);
    return (
        show && (
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
                {header && <Alert.Heading>{header}</Alert.Heading>}
                {body && <p>{body}</p>}
            </Alert>
        )
    );
};

const NegativeAlertDismissible: React.FC<Notification> = ({ header, body }) => {
    const [show, setShow] = useState(true);

    return (
        show && (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                {header && <Alert.Heading>{header}</Alert.Heading>}
                {body && <p>{body}</p>}
            </Alert>
        )
    );
};

const NotificationComponent: React.FC<PropsFromState> = ({ notification }) => (
    <Wrapper>
        {notification.type === NotificationType.positive && <PositiveAlertDismissible {...notification} />}
        {notification.type === NotificationType.negative && <NegativeAlertDismissible {...notification} />}
    </Wrapper>
);

const mapStateToProps = (state: ApplicationState) => ({
    notification: state.ui.notification,
});

export default connect(
    mapStateToProps,
    null,
)(NotificationComponent);

const Wrapper = styled.div`
    text-align: center;
`;
