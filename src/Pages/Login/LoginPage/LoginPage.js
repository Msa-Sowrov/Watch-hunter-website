import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './LoginPage.css'
const LoginPage = () => {
    const { register, handleSubmit, } = useForm();
    const {user, signUp} = useAuth();
    const onSubmit = data =>{
        if(data.password !== data.password2){
            return
        }
        signUp(data.email, data.password, data.name)
        
        data = {
            name:data.name,
            email:data.email
        }
        fetch('https://hidden-hollows-67955.herokuapp.com/user',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
    } 
    return (
        <div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 col-12">
                        <img className="img-fluid" src="https://i.ibb.co/XjzwF8y/4957136.jpg" alt="" />
                    </div>
                    <div className="col-md-6 col-12">
                    <h1>Rgister here to explore more</h1>
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("name")} placeholder="your name"/>
                        <input type="email" {...register("email")} placeholder="your email"/>
                        <input  type="password" {...register("password")} placeholder="your password"/>
                        <input type="password" id="pass2" {...register("password2")} placeholder="your password"/>
                    <p>Already registerd?? <Link to="/signIn">login</Link></p>
                        <input type="submit" />
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default LoginPage;