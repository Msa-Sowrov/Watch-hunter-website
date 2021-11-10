import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
    let [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <div>
                <div className="container">
                    <h1 className="m-auto">Our Products</h1>
                        <div className="row" >
                    {
                        products.map(pro=><div key={pro._id} className="col-md-3 col-12 mb-4">
                                <div className="card h-100">
                                <img src={pro.img} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{pro.name}</h5>
                                    <p className="card-text">{pro.desf}</p>
                                    <small>price: {pro.price}</small>
                                </div>
                                <div className="card-footer">
                                    <Link to={`/purchase${pro._id}`}>
                                        <button>Purchase</button>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Explore;