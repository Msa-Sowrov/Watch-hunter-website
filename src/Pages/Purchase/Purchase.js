import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Purchase.css'

const Purchase = () => {
    const [address, setAddress] =useState('')
    const [number, setNumber] =useState('')
    const {user} = useAuth()
    const [product, setProduct] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        fetch('https://hidden-hollows-67955.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{
            const product = data.find(pro=> pro._id=== id)
            setProduct(product)
        })
    },[])

    //handleAdress
    const handleAdress = e =>{
        const address = e.target.value;
        setAddress(address)
    }
    const handleNumber = e =>{
        const number = e.target.value;
        setNumber(number)
    }

    //add order 
    const handlePlaceOrder = () =>{
        if(address === "" && number === ""){
            window.alert="please give number and address"
            return
        }
        const data ={
            name:product.name,
            img:product.img,
            price:product.price,
            email:user.email,
            address:address,
            number:number,
            status:'pending',
            time:new Date().toLocaleString()
        }
        fetch('https://hidden-hollows-67955.herokuapp.com/order',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
       .then(res=>res.json())
       .then(result=>{
           if(result.acknowledged){
                alert('wooooow, you orderd successfuly')
           }
       })
    }
     return (
        <div>
            <div className="container">
                <div className="row my-5" >
                    <div className="col-md-6 col-12">
                        <img className="img-fluid" src={product.img} alt="" />
                    </div>
                    <div className="order-details col-md-6 col-12">
                        <h3>Product Name : {product.name}</h3>
                        <p>Description : {product.desf}</p>
                        <p>Price :  ${product.price}</p>
                        <hr/>
                        <p>Your Name :  {user.displayName}</p>
                        <p>Your Email: {user.email}</p>
                        <span>Your Address  : </span>
                        <input onBlur={handleAdress} className="mb-3 mx-1 w-80" type="text" placeholder="your Address" />
                        <br/>
                        <span>Phone number: </span>
                        <input onBlur={handleNumber} type="text"  placeholder="your phone number"/>
                        <br/>
                        <div className="text-center">
                            <button onClick={handlePlaceOrder} className="btn btn-primary">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;