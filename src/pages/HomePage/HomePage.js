import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BuisinessSummary from './BuisinessSummary';
import Contact from './Contact';
import './homepage.css';
import NewProductComing from './NewProductComing';
import Reviews from './Reviews';
import Tools from './Tools';
const HomePage = () => {
    return (
        <div className='homepage'>
            <Banner></Banner>
            <Tools></Tools>
            <BuisinessSummary></BuisinessSummary>
            <NewProductComing></NewProductComing>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;