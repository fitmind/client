import React from 'react';
import styled from 'styled-components';

const Header1 = styled.h1`
    font-size: ${props => props.theme.font.h1};
    margin-bottom: 0.7rem;
`;
const Header2 = styled.h2`
    font-size: ${props => props.theme.font.h2};
    margin-bottom: 0.7rem;
`;
const Header3 = styled.h3`
    font-size: ${props => props.theme.font.h3};
    margin-bottom: 1rem;
`;

const Header4 = styled.h4`
    font-size: ${props => props.theme.font.h4};
    margin-bottom: 0.7rem;
`;

const Header5 = styled.h5`
    font-size: ${props => props.theme.font.h5};
`;

export interface HeaderProps {
    as: string;
}

const Header: React.FC<HeaderProps> = ({ children, as }) => {
    switch (as) {
        case 'h1':
            return <Header1>{children}</Header1>;
        case 'h2':
            return <Header2>{children}</Header2>;
        case 'h3':
            return <Header3>{children}</Header3>;
        case 'h4':
            return <Header4>{children}</Header4>;
        case 'h5':
            return <Header5>{children}</Header5>;
        default:
            return <Header1>{children}</Header1>;
    }
};

export default Header;
