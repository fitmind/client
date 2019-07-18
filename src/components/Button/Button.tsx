import React from 'react';
import styled from 'styled-components';

// an example of how we could re-use type definitions across interfaces or in the same interface
type actionFunction = () => void;

export interface ButtonProps {
    text: string;
    action: actionFunction;
    action2?: actionFunction;
}

const Wrapper = styled.button`
    background-color: ${p => p.theme.main};
    &:hover {
        background-color: red;
    }
`;

const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => (
    <Wrapper onClick={(): void => props.action()}>
        <span>{props.text}</span>
    </Wrapper>
);

export default Button;
