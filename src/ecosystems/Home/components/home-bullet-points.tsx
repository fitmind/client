import React from 'react';
import styled from 'styled-components';
import alert from '../../../assets/svg/alert.svg';
import close from '../../../assets/svg/close.svg';
import clock from '../../../assets/svg/clock.svg';
import gift from '../../../assets/svg/gift.svg';
import Header from '../../../atoms/Header/Header';
import Paragraph from '../../../atoms/Paragraph/Paragraph';

const bulletPoints = [
    {
        header: 'It’s freaking free!',
        body:
            'Absolutely no obligations, no commitments, no membership fees! Just pure joy of signing up and browsing through tons of free content and super-cool experts.',
        icon: alert,
    },
    {
        header: 'Transparency, no BS',
        body:
            'You won’t find hidden charges, tricky fine print or promises we can’t fulfill. If you decide to book an expert, you know the cost upfront and what’s included.',
        icon: close,
    },
    {
        header: 'No time wasted',
        body:
            'We bring you the best wellbeing experts YOU select and can book instantly, like now. So, who is the boss? You’re THE BOSS!',
        icon: clock,
    },
    {
        header: 'You are special',
        body:
            'No, not that kind of ‘special’. You truly are special and we want you to be kickass awesome! You are in the right place.',
        icon: gift,
    },
];

const BulletGrid = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 200px 200px;
        margin-top: 4rem;
        padding: 2rem;
    }
`;

const Bullet = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const BulletInner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;

const Icon = styled.img`
    display: none;
    @media (min-width: 768px) {
        display: block;
        height: 4rem;
        width: 4rem;
    }
`;

const HomeBulletPoints = () => (
    <BulletGrid>
        {bulletPoints.map(point => (
            <Bullet key={point.header}>
                <Icon src={point.icon} />
                <BulletInner>
                    <Header as={'h4'}>{point.header}</Header>
                    <Paragraph as={'md'}>{point.body}</Paragraph>
                </BulletInner>
            </Bullet>
        ))}
    </BulletGrid>
);

export default HomeBulletPoints;
