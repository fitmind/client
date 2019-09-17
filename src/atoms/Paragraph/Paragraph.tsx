import React from 'react';
import styled from 'styled-components';

const P = styled.p`
    line-height: 1.6;
    margin-bottom: 0.2rem;
`;

const Medium = styled(P)`
    font-size: ${props => props.theme.font.md};
`;

const Large = styled(P)`
    font-size: ${props => props.theme.font.lg};
`;

const Small = styled(P)`
    font-size: ${props => props.theme.font.sm};
`;

interface ParagraphProps {
    as: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, as }) => {
    switch (as) {
        case 'm':
        case 'medium':
            return <Medium>{children}</Medium>;
        case 'lg':
        case 'large':
            return <Large>{children}</Large>;
        case 'sm':
        case 'small':
            return <Small>{children}</Small>;
        default:
            return <Medium>{children}</Medium>;
    }
};

export default Paragraph;
