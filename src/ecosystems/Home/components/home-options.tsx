import styled from 'styled-components';
import React from 'react';
import { AnimatedText } from '../../../utils/style-helpers';
import Header from '../../../atoms/Header/Header';
import Paragraph from '../../../atoms/Paragraph/Paragraph';

const options = [
    {
        header: 'Article goes here...',
        body: 'Some option body',
    },
    {
        header: 'Article goes here...',
        body: 'Some option body',
    },
    {
        header: 'Article goes here...',
        body: 'Some option body',
    },
    {
        header: 'Article goes here...',
        body: 'Some option body',
    },
    {
        header: 'Article goes here...',
        body: 'Some option body',
    },
    {
        header: 'Article goes here...',
        body: 'Some option body',
    },
    {
        header: 'Article goes here...',
        body: 'Some option body',
    },
    {
        header: 'Article goes here...',
        body: 'Some option body',
    },
];

const Wrapper = styled.div`
    padding: 2rem;
`;

const Carousel = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    overflow-x: scroll;
`;

const Option = styled.div`
    height: 400px;
    min-width: 320px;
    color: white;
    background-color: #d6887e;
    margin-right: 2rem;
    cursor: pointer;
    transform: scale(1);
    transition: 0.2s ease;
    :hover {
        transform: rotate(-10deg);
    }
`;

const OptionHeader = styled.div`
    margin-top: 3rem;
    text-align: center;
`;

const MarginTop = styled.div`
    margin-top: 3rem;
`;

const HomeOptions = () => (
    <Wrapper>
        <hr />
        <MarginTop>
            <AnimatedText>
                <Header as={'h3'}>Get your daily fix</Header>
            </AnimatedText>
            <Carousel>
                {options.map(option => (
                    <Option key={option.header + Math.random()}>
                        <OptionHeader>
                            <Paragraph as={'lg'}>{option.header}</Paragraph>
                        </OptionHeader>
                    </Option>
                ))}
            </Carousel>
        </MarginTop>
    </Wrapper>
);

export default HomeOptions;
