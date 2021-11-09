import React, { useEffect, useState } from 'react';

const Products = () => {
    let [products, setProducts] = useState([])
    products = products.slice(6)
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <div className="container">
                <h1 className="m-auto">Our Products</h1>
                <div className="row" >
                    {
                        products.map(pro=><div class="col-md-4 col-12 mb-4">
                                <div class="card h-100">
                                <img src={pro.img} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{pro.name}</h5>
                                    <p class="card-text">{pro.desf}</p>
                                    <small>price: {pro.price}</small>
                                </div>
                                <div class="card-footer">
                                    <button>Purches</button>
                                </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;