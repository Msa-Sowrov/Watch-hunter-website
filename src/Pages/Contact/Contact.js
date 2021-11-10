import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5 col-12">
                        <img className="img-fluid" src="https://i.ibb.co/RQdnCpT/5124556.jpg" alt="" />
                    </div>
                    <div className="col-md-5 col-12">
                        <h2>Contact us</h2>
                        <p>Email: mdsowrov315@gmail.com</p>
                        <p>Email: mdsowrov315@outlock.com</p>
                        <p>Number: 00974 30745299</p>
                        <p>Address: doha,qatar</p>
                        <button className="btn btn-primary">Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;