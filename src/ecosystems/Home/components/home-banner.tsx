import React from 'react';
import styled from 'styled-components';
import BannerImage from '../../../assets/images/banner.jpg';
import Header from '../../../atoms/Header/Header';

const Banner = styled.div`
    background: url(${BannerImage});
    display: flex;
    align-items: flex-end;
    height: 700px;
`;

const BannerInner = styled.div`
    height: 40%;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BannerText = styled.div`
    color: ${props => props.theme.colors.white};
    opacity: 1;
    width: 70%;
`;

const HomeBanner = () => (
    <Banner>
        <BannerInner>
            <BannerText>
                <Header as={'h1'}>Fitmind</Header>
                <Header as={'h4'}>Your Wellbeing expert booking platform</Header>
            </BannerText>
        </BannerInner>
    </Banner>
);

export default HomeBanner;
