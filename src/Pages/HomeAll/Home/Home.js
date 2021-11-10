import React from 'react';
import Footer from '../../Footer/Footer';
import Reveiw from '../../Reveiw/Reveiw';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Products></Products>
            <Reveiw></Reveiw>
            <Footer></Footer>
        </div>
    );
};

export default Home;