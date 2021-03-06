import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './LoginPage.css'
const SignIn = () => {
    const { register, handleSubmit, reset } = useForm();
    const location = useLocation();
    const history = useHistory();
    const {login} = useAuth();
    const redirect_uri = location.state?.from || '/'
    const onSubmit = data =>{
        login(data.email, data.password)
        .then((result) => {
            history.push(redirect_uri)
          })
          .catch((error) => {
          })
        reset()
    } 
    return (
        <div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 col-12">
                        <img className="img-fluid" src="https://i.ibb.co/XjzwF8y/4957136.jpg" alt="" />
                    </div>
                    <div className="col-md-6 col-12">
                    <h1>Please Login</h1>
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <input type="email" {...register("email")} placeholder="your email"/>
                        <input  type="password" {...register("password")} placeholder="your password"/>
                        <p>not registerd?? <Link to="/login">register</Link></p>
                        <input type="submit" />
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SignIn;