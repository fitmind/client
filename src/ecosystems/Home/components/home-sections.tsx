import React from 'react';
import styled from 'styled-components';
import Food from '../../../assets/images/food.png';
import DKNY from '../../../assets/images/dkny.png';
import Laptop from '../../../assets/images/laptop.png';

const sectionList = [
    {
        header: 'Nutrition',
        imgUrl: Food,
    },
    {
        header: 'Fitness',
        imgUrl: DKNY,
    },
    {
        header: 'Life Coaching',
        imgUrl: Laptop,
    },
];

const Sections = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 7rem;
`;

const Section = styled.div`
    background-size: cover;
    margin-right: 3rem;
    // @ts-ignore
    background: url(${props => props.image});
    background-size: cover; /* <------ */
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
    transform: scale(1);
    transition: 0.2s ease;
    height: 350px;
    width: 350px;
    display: flex;
    align-items: flex-end;
`;
const SectionInner = styled.div`
    height: 20%;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    color: white;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.font.lg};
`;

const HomeSections = () => (
    <Sections>
        {sectionList.map(section => (
            // @ts-ignore
            <Section image={section.imgUrl} key={section.header}>
                <SectionInner>{section.header}</SectionInner>
            </Section>
        ))}
    </Sections>
);

export default HomeSections;
