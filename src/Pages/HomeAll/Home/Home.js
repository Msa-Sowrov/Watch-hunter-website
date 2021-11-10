import React from 'react';
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
        </div>
    );
};

export default Home;