import React from 'react';
import necklace from './../../assets/necklace.jpg';
import necklace4 from './../../assets/necklace4.jpg';
import necklace5 from './../../assets/necklace5.jpg';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="img-fluid" height="550px" width="100%" src ={necklace}
                  class = "d-block w-100"
                alt="..." />
                  
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" height="580px" width="100%" src ={necklace4}
                    class = "d-block w-100"
                    alt = "..." />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" height="330px" width="100%" src={necklace5} alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
      
    );
};

export default Banner;