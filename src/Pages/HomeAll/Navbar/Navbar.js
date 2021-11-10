import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const {user, logOut} = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    <Link className="navbar-brand" to="/">Watch Hunter</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/explore">Explore</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/dashbord">Dashbord</Link>
        </li>
        
        
      </ul>
      <form className="d-flex">
        {
          user.email?
            <button onClick={logOut} className="btn btn-danger">Logout</button>
            :
            <Link to="/signin">
                <button className="btn">login</button>
          </Link>
          }
          
       <span>sign in as:{user.displayName}</span>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;