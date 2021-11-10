import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Dashbord = () => {
    const {logOut} = useAuth()
    return (
        <div>
            <div class="container min-vh-100 py-2">
    <div class="row">
        <div class="col">
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"> Open Menu </button>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" data-bs-keyboard="true" data-bs-backdrop="true" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Sidebar</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div id="sidebar" class="border rounded">
                        <div class="nav flex-column py-3">
                            <Link to="/">
                                <h6>My order</h6>
                                </Link>                            
                            <Link to="/">
                                <h6>Pay</h6>
                                </Link>                            
                            <Link to="/">
                               <h6> Review </h6>
                                </Link>
                            <button onClick={logOut}>Logout</button>                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Dashbord;