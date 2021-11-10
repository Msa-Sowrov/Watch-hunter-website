import React from 'react';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';
import ImgBanner from '../../ImgBanner/ImgBanner';
import Reveiw from '../../Reveiw/Reveiw';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <ImgBanner></ImgBanner>
            <Products></Products>
            <Contact></Contact>
            <Reveiw></Reveiw>
            <Footer></Footer>
        </div>
    );
};

export default Home;