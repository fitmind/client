import React from 'react';
import HomeBanner from './components/home-banner';
import HomeSections from './components/home-sections';
import HomeDescription from './components/home-descriptions';
import HomeBulletPoints from './components/home-bullet-points';
import HomeOptions from './components/home-options';

const Home: React.FC = () => (
    <div>
        <HomeBanner />
        <HomeSections />
        <HomeDescription />
        <HomeBulletPoints />
        <HomeOptions />
    </div>
);

export default Home;
