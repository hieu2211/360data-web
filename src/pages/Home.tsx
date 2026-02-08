import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import DataPipeline from '../components/DataPipeline';
import SuccessStories from '../components/SuccessStories';
import CTA from '../components/CTA';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <DataPipeline />
            <Features />
            <SuccessStories />
            <CTA />
        </>
    );
};

export default Home;
