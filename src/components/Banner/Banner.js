import React from 'react';
import slider1 from './../../assets/slider1.jpg';
import slider2 from './../../assets/slider2.jpg';
import slider3 from './../../assets/slider3.jpg';

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
                  <img className="img-fluid" src ={slider1}
                  class = "d-block w-100"
                alt="..." />
                  
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src ={slider2}
                    class = "d-block w-100"
                    alt = "..." />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src={slider3} alt="..." />
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


            // extra
      // <div class="row ">
      //           <div class="col ">
      //               <div class="card bg-dark text-light">
      //                   <div class="card-body">
      //                       <h5 class="card-title">Card title</h5>
      //                       <p class="card-text">This is a short card.</p>
      //                   </div>
      //               </div>
      //           </div>
      //           <div class="col">
      //               <div class="card bg-dark text-light">
      //                   <div class="card-body">
      //                       <h5 class="card-title">Card title</h5>
      //                       <p class="card-text">This is a short card.</p>
      //                   </div>
      //               </div>
      //           </div>
      //           <div class="col">
      //               <div class="card bg-dark text-light">
      //                   <div class="card-body">
      //                       <h5 class="card-title">Card title</h5>
      //                       <p class="card-text">This is a short card.</p>
      //                   </div>
      //               </div>
      //           </div>
      //           <div class="col">
      //               <div class="card bg-dark text-light" >
      //                   <div class="card-body">
      //                       <h5 class="card-title">Card title</h5>
      //                       <p class="card-text">This is a short card.</p>
      //                   </div>
      //               </div>
      //           </div>
      //       </div>
      
    );
};

export default Banner;