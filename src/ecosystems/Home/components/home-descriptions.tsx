import React from 'react';
import styled from 'styled-components';
import Image from '../../../assets/images/good-vibes.jpg';
import Header from '../../../atoms/Header/Header';
import Paragraph from '../../../atoms/Paragraph/Paragraph';
import { AnimatedText } from '../../../utils/style-helpers';

const Description = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 8rem;
    width: 100%;
`;
const DescriptionImage = styled.img`
    background: url(${Image});
    background-size: cover; /* <------ */
    background-repeat: no-repeat;
    background-position: center center;
    width: 30%;
    min-height: 500px;
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
    <div>
        <Description>
            <DescriptionImage />
            <DescriptionBody>
                <AnimatedText>
                    <Header as={'h3'}>Who the heck are we?</Header>
                </AnimatedText>
                <DescriptionText>
                    <Paragraph as={'lg'}>
                        Modestly put, we are the god-sent solution to improving your life. And in one click! Whether you
                        look to get that beach bod, find a diet that agrees with your chocolate addiction, or land that
                        long overdue promotion...
                    </Paragraph>
                </DescriptionText>
                <DescriptionText>
                    <Paragraph as={'lg'}>
                        Whatever your goal, we are here for you. We will connect you with a nearby wellbeing expert who
                        will help you to achieve your kickass goals... and we do it with an ease of Roger Federer
                        winning US Open Final.
                    </Paragraph>
                </DescriptionText>
            </DescriptionBody>
        </Description>
    </div>
);

export default HomeDescription;
