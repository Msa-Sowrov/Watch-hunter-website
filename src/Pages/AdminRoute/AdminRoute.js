import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {loding,profile}= useAuth();

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
            profile?.role === 'admin' ? children :  <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        
      }
    />
    );
};

export default AdminRoute;