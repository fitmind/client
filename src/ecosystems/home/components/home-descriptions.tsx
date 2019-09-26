import React from 'react';
import styled from 'styled-components';
import Image from '../../../assets/images/good-vibes.jpg';
import Header from '../../../atoms/Header/Header';
import Paragraph from '../../../atoms/Paragraph/Paragraph';
import { Button } from 'react-bootstrap';

const Description = styled.div`
    display: flex;
    flex-direction: column-reverse;
    @media (min-width: 768px) {
        flex-direction: row;
        margin-top: 5rem;
        width: 100%;
    }
`;
const DescriptionImage = styled.img`
    background: url(${Image});
    background-size: cover; /* <------ */
    background-repeat: no-repeat;
    background-position: center center;
    min-height: 500px;
    @media (min-width: 768px) {
        width: 30%;
    }
`;
const DescriptionBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4rem;
    max-width: 700px;
`;

const DescriptionText = styled.div`
    margin-bottom: 1.5rem;
`;

const HomeDescription = () => (
    <Description>
        <DescriptionImage />
        <DescriptionBody>
            <Header as={'h3'}>Who the heck are we?</Header>
            <DescriptionText>
                <Paragraph as={'lg'}>
                    Modestly put, we are the god-sent solution to improving your life. And in one click! Whether you
                    look to get that beach bod, find a diet that agrees with your chocolate addiction, or land that long
                    overdue promotion...
                </Paragraph>
            </DescriptionText>
            <DescriptionText>
                <Paragraph as={'lg'}>
                    Whatever your goal, we are here for you. We will connect you with a nearby wellbeing expert who will
                    help you to achieve your kickass goals... and we do it with an ease of Roger Federer winning US Open
                    Final.
                </Paragraph>
            </DescriptionText>
            <Button variant={'outline-secondary'}>About us</Button>
        </DescriptionBody>
    </Description>
);

export default HomeDescription;
