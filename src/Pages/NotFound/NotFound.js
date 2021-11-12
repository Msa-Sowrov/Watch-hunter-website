import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="text-center">
            <img className="img-fluid" src="https://pic.xiaomist.com/schmidtisblog.de/wp-content/uploads/2021/08/samsung-galaxy-watch-4-classic-5.webp"></img>
                <br/>
                <Link to="/">
                <button className="btn btn-primary"> Go Back Home</button>

                </Link>
            </div>
        </div>
    );
};

export default NotFound;