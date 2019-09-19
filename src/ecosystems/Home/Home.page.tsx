import React from 'react';
import HomeBanner from './components/home-banner';
import HomeDescription from './components/home-descriptions';
import HomeBulletPoints from './components/home-bullet-points';
import HomeOptions from './components/home-options';

const Home: React.FC = () => (
    <div>
        <HomeBanner />
        <HomeDescription />
        <HomeBulletPoints />
        <HomeOptions />
    </div>
);

export default Home;
