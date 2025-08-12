import React from 'react';
import Books from '../components/Books';
import Hero from '../components/Hero';
import SectionTitle from "../components/SectionTitle";

const Home = () => {
    return (
        <>
            <Hero />
            <SectionTitle title={'Our Books'} />
            <Books />
        </>
    );
};

export default Home;