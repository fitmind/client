import React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers/root.reducer';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';

interface PropsFromState {
    loading: boolean;
}

const LoadingComponent: React.FC<PropsFromState> = ({ loading }) => (
    <div>
        {loading && (
            <Background>
                <Spinner animation="grow" variant="success">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </Background>
        )}
    </div>
);

const mapStateToProps = (state: ApplicationState) => ({
    loading: state.ui.loading,
});

export default connect(
    mapStateToProps,
    null,
)(LoadingComponent);

const Background = styled.div`
    background: rgba(0, 0, 0, 0.5); /* Green background with 30% opacity */
    color: white;
    height: 100vh;
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
`;
