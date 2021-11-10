import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Hunter Watch</h2>
                        <p>contact:010101001</p>
                        <p>Email: mdsowrov315@gmail.com</p>
                        <p>Email: mdsowrov315@gmail.com</p>
                    </div>
                    <div className="col-md-6">
                        <h2>Useful LInk</h2>
                        <Link to="/">Home</Link><br/>
                         <Link to="/explore">Explore</Link><br/>
                         <Link to="/about">About</Link><br/>
                         <Link to="/signin">LogIN</Link><br/>
                         
                    </div>
                </div>
            <div className="text-center down">
                <small>Crafted by @msasowrov</small>
            </div>
            </div>
        </div>
    );
};

export default Footer;