import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 col-12">
                        <h1>Watch hunter is here for
                            creative pros to carry, build & hack life better.
                        </h1>
                        <small>
                        A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.
                        </small>
                    </div>
                    <div className="col-md-6 col-12">
                        <img className="img-fluid" src="https://i.ibb.co/sCbSPY8/pngegg-29.png" alt="" />
                    </div>
                </div>
            </div>
    </div>
    <div className="carousel-item">
    <img className="img" src="https://i.ibb.co/Y2vRkwt/apple.webp" alt="" />
    </div>
    <div className="carousel-item">
    <img className="img" src="https://i.ibb.co/Z124kTX/srggsdf.jpg" alt="" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            
        </div>
    );
};

export default Banner;