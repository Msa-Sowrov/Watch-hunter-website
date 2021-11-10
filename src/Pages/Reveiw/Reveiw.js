import React, { useEffect, useState } from 'react';
import ReactRating from "react-rating";

const Reveiw = () => {
    const [review, setReview] = useState([])
    useEffect(()=>{
        fetch('https://hidden-hollows-67955.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div>
            <div className="container">
                <div className="text-center my-4">
                    <h1 className="text-primary">Testimonial</h1>
                </div>
                <div className="row">
                    {
                        review.map(r=> <div key={r._id} className="col-md-4 col-12 mb-4">
                            <div className="card">
                                    <div className="card-header">
                                        <ReactRating readonly initialRating={r.rate}/>
                                    </div>
                                    <div className="card-body">
                                        <blockquote className="blockquote mb-0">
                                        <p>{r.text}</p>
                                        <footer className="blockquote-footer"><cite title="Source Title">{r.email}</cite></footer>
                                        </blockquote>
                                    </div>
                                    </div>
                              </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reveiw;