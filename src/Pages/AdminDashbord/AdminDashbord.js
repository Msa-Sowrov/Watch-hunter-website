import React from 'react';
import { useEffect,useState } from 'react';
import './AdminDashbord.css'
import { useForm } from "react-hook-form";
const AdminDashbord = () => {
    const { register, handleSubmit} = useForm();
    const [order, setOrder] = useState()
    const [allUser, setAllUser] = useState()
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://hidden-hollows-67955.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[products])
    useEffect(()=>{
        fetch('https://hidden-hollows-67955.herokuapp.com/order')
        .then(res=>res.json())
        .then(data=>{
            setOrder(data)
        })
    },[order])
    useEffect(()=>{
        fetch('https://hidden-hollows-67955.herokuapp.com/user')
        .then(res=>res.json())
        .then(data=>setAllUser(data))
    },[allUser])

    //make admin
    const makeAdnin= (data, id) =>{
        const url = `https://hidden-hollows-67955.herokuapp.com/user${id}`
        fetch(url,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res =>res.json)
        .then(data =>{
            if(data){
                alert('WOw, successfuly made admin')
            }
        })
    }

    //shipped
    const shipped =(order, id)=>{
        const data = {
            name:order.name,
            email:order.email,
            time:order.time,
            img:order.img,
            address:order.address,
            status:'Shipped',
            price:order.price
        }
        const url = `https://hidden-hollows-67955.herokuapp.com/order${id}`
        fetch(url,{
            method:'put',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert('successfuly status Updated')
            }
        })
    }

    //remove order
    const removeOrder =(id)=>{
        const url = `https://hidden-hollows-67955.herokuapp.com/order${id}`
        const confirm = window.confirm('are you sure to remove this order')
        if(confirm){
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                alert('successfuly deleted')
            })

        }
        
    }
    //detete products
    const deleteProducts =(id)=>{
        const url = `https://hidden-hollows-67955.herokuapp.com/products${id}`
        const confirm = window.confirm('are you sure to remove this order')
        if(confirm){
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                alert('successfuly deleted')
            })

        }
        
    }
    //add products
    const onSubmit = data =>{
        console.log(data)
        fetch('https://hidden-hollows-67955.herokuapp.com/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
    }
    return (
        <div>
            <div className="container">
                <div className="row d-flex gap-4 my-5">
                    <div className="review col-md-4">
                        <h3 className="text-primary">Make An Admin</h3>
                        <div className="table-responsive">
                        <table className="table align-middle">
                            <thead>
                            <tr>
                               <th>email</th>
                               <th>Make Admin</th>
                            </tr>
                            </thead>
                            <tbody>
                            {

                                    allUser?.map(u=><tr key={u._id}>
                                    <td>{u.email}</td>
                                    <td>
                                         <button onClick={()=>makeAdnin(u, u._id)} className="btn mb-2">Make Admin</button>
                                    </td>
                                    </tr>
                                        )
                                    }   
                            </tbody>
                            </table>
                    </div>
                    </div>
                    <div className="review col-md-7">
                        <h3 className="text-primary">Order List</h3>
                        <div className="table-responsive">
                        <table className="table align-middle">
                            <thead>
                            <tr>
                               <th>product</th>
                               <th>price</th>
                               <th>order time</th>
                               <th>status</th>
                               <th>Shipped/cancle</th>
                            </tr>
                            </thead>
                            <tbody>

                            {

                                order?.map(o=><tr key={o._id}>
                               <td>{o.name}</td>
                               <td>{o.price}</td>
                               <td>{o.time}</td>
                               <td className="text-danger">{o.status}</td>
                               <td>
                                   <button onClick={()=>shipped(o, o._id)}><i className="fas fa-shipping-fast"></i></button>
                                   <button onClick={()=>removeOrder(o._id)}><i className="fas fa-trash"></i></button>
                                </td>
                                
                            </tr>
                                    )
                            }
                            
                            </tbody>
                            </table>
                            </div>

                    </div>
                    <div className="review col-md-6">
                    <h2 className="text-primary">Product Managment</h2>
                    <div className="table-responsive">
                        <table className="table align-middle">
                            <thead>
                            <tr>
                               <th>product</th>
                               <th>price</th>
                               <th>Remove</th>
                            </tr>
                            </thead>
                            <tbody>

                            {

                                products?.map(o=><tr key={o._id}>
                               <td>{o.name}</td>
                               <td>{o.price}</td>
                               <td>
                                   <button onClick={()=>deleteProducts(o._id)}><i className="fas fa-trash"></i></button>
                                </td>
                                
                            </tr>
                                    )
                            }
                            
                            </tbody>
                            </table>
                            </div>

                    </div>
                    <div className="review col-md-5">
                        <h2 className="text-primary">Add More Products</h2>
                        <form className="add-products" onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("img")} placeholder="img-url ratio:300-200" />
                            <input {...register("name")} placeholder="name"/>
                            <input {...register("price")} placeholder="Price"/>
                            <input {...register("desf")} placeholder="description"/>
                            <input {...register("status")} placeholder="status"/>
                            <input type="submit" />
                            </form>

                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default AdminDashbord;