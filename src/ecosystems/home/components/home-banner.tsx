import React from 'react';
import styled from 'styled-components';
import BannerImage from '../../../assets/images/banner.jpg';
import Header from '../../../atoms/Header/Header';
import Paragraph from '../../../atoms/Paragraph/Paragraph';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router';
import CONFIG from '../../../config/config';

const Banner = styled.div`
    background: url(${BannerImage});
    display: flex;
    text-align: center;
    height: 700px;

    @media (min-width: 768px) {
        height: 700px;
        align-items: flex-end;
        text-align: left;
    }
`;

const BannerInner = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    height: 100%;
    @media (min-width: 768px) {
        margin-top: 0;
        align-items: center;
        height: 40%;
        background-color: rgba(0, 0, 0, 0.4);
    }
`;

const BannerText = styled.div`
    color: ${props => props.theme.colors.white};
    opacity: 1;
    width: 70%;
`;

const HomeBanner = props => (
    <Banner>
        <BannerInner>
            <BannerText>
                <Header as={'h1'}>Fitmind</Header>
                <Paragraph as={'lg'}>Your Wellbeing expert booking platform</Paragraph>
                <Button variant={'info'} className={'mt-2'} onClick={() => props.history.push(CONFIG.routes.listings)}>
                    LISTINGS
                </Button>
            </BannerText>
        </BannerInner>
    </Banner>
);

export default withRouter(HomeBanner);
