import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {loding, user}= useAuth();
   if(loding){
       return <div className="d-flex justify-content-center">
       <div className="spinner-border text-primary" role="status">
         <span className="visually-hidden">Loading...</span>
       </div>
     </div>
   }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? children :  <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        
      }
    />
    );
};

export default PrivateRoute;