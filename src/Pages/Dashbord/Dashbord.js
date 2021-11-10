import React, { useEffect, useState} from 'react';
import ReactRating from "react-rating";
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Dashbord.css'

const Dashbord = () => {
    const {user, logOut} = useAuth()
    const [order, setOrder] = useState()
    const [rateing, setRateing] = useState('')
    const [text, setText] = useState('')

    const handleText = (e) =>{
        setText(e.target.value)
    }
    const review = (rateing, text) =>{
        const data = {
            rate:rateing,
            text:text,
            email:user.email,
            name: user.displayName
        }
        console.log(data)
        fetch('https://hidden-hollows-67955.herokuapp.com/review',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            alert("successfuly review <added></added>")
        })
    }
    useEffect(()=>{
        fetch('https://hidden-hollows-67955.herokuapp.com/order')
        .then(res=>res.json())
        .then(data=>{
            const myorder = data.filter(pro=> pro.email === user.email)
            setOrder(myorder)
        })
    },[order])
    const deleteOwnOrder =(id)=>{
        const url = `https://hidden-hollows-67955.herokuapp.com/order${id}`
        const confirm = window.confirm('are you sure to cancle your order')
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

    return (
        <div>
            <div className="container">
            <div className="row gap-4 my-5">
                <div className="orderlist col-md-5 text-center">
                    <h3>My Order List</h3>
                    <hr/>
                    <div className="table-responsive">
                        <table className="table align-middle">
                            <thead>
                            <tr>
                               <th>product</th>
                               <th>price</th>
                               <th>order time</th>
                               <th>status</th>
                               <th>Cancle</th>
                            </tr>
                            </thead>
                            <tbody>

                            {

                                order?.map(o=><tr key={o._id}>
                               <td>{o.name}</td>
                               <td>{o.price}</td>
                               <td>{o.time}</td>
                               <td className="text-danger">{o.status}</td>
                               <td className="text-danger">
                                   <button onClick={()=>deleteOwnOrder(o._id)}>X</button>
                               </td>
                            </tr>
                                    )
                            }
                            
                            </tbody>
                            </table>
                            </div>

                </div>
                <div className="col-md-5 col-12 text-center review">
                    <h2>Review us</h2>
                    <ReactRating initialRating={rateing} onClick={e => setRateing(e)}/>
                    <textarea name="" id="" onBlur={handleText} ></textarea> <br/>
                    <button onClick={()=>{review(rateing, text)}} className="btn btn-primary">Submit</button>
                </div>
                <div className="review col-md-5 col-12 text-center">
                        <img className="img-fluid" src="https://i.ibb.co/DMWRtD2/card.png" alt="" />
                        <h3>payment system coming soon</h3>
                </div>
                
                <div className="col-md-5">
                </div>
            </div>
            </div>







            {/* <div className="container min-vh-100 py-2">
    <div className="row">
        <div className="col">
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"> Open Menu </button>
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" data-bs-keyboard="true" data-bs-backdrop="true" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Sidebar</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div id="sidebar" className="border rounded">
                        <div className="nav flex-column py-3">
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
</div> */}
        </div>
    );
};

export default Dashbord;