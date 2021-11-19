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
              {/* image-text  */}
              <div class="text-block" style={{ position: 'absolute', bottom: '170px', right: '750px',paddingLeft:'50px',PaddingRight:'250px', marginLeft:'100px', color: 'white' }}>
                    <h1 className="fs-1 fw-bold" style={{color: '#bba151', letterSpacing: '5px'}}>DIAMOND Jewellery Collection</h1>
                    <div className="mt-4">
                      <span className="fs-1 text-danger" style={{letterSpacing: '10px'}}>SALE !!</span>
                      <small className="mt-1">upto 50% OFF</small>
                       <button type="submit" className=" mt-3 btn-lg btn-outline-light mb-4 subscribe-btn" style={{color: '#bba151',backgroundColor:'#010101'}}> EXPLORE MORE</button>
                    </div>
              </div>
                  
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src ={slider2}
                    class = "d-block w-100"
                alt="..." />
              
              {/* img-text  */}
               <div class="text-block" style={{ position: 'absolute', bottom: '170px', right: '750px',paddingLeft:'50px',PaddingRight:'250px', marginLeft:'100px', color: 'white' }}>
                    <h1 className="fs-1 fw-bold text-light" style={{letterSpacing: '5px'}}>ANTIQUE Diamond Necklaces</h1>
                    <div className="mt-4">
                      <span style={{ color: '#bba151'}}>Beautiful Colors, Excellent Quality</span> <br />
                       <button type="submit" className=" mt-3 btn-lg btn-outline-light mb-4 subscribe-btn" style={{color: '#bba151',backgroundColor:'#010101'}}>SHOP NOW</button>
                    </div>
              </div>
                  
              {/* img-text  */}
                  {/* <div class="text-block mt-5 text-white bg-danger" style={{ position: 'absolute', right: '750px',paddingLeft:'50px',PaddingRight:'250px', marginLeft:'100px',  }}>
                        <h1 className="fs-1 fw-bold mt-5 text-white" style={{letterSpacing: '10px'}}>ANTIQUE Diamond Necklaces</h1>
                        <div className="mt-4">
                          <span style={{ color: '#bba151' }} className="fs-5">Beautiful Colors, Excelent Quality..</span>
                          <button type="button" class="mt-3 btn btn-dark btn-lg">SHOP NOW</button>
                          {/* <button type="button" style={{paddingLeft: '20px', PaddingRight: '20px'}} class="btn btn-dark mt-3">Shop Now</button> */}
                        {/* </div>
                  </div> */}
                </div> 
            
                <div className="carousel-item">
                <img className="img-fluid" src={slider3} alt="..." />
              {/* img-text */}
                    <div class="text-block mt-5" style={{ position: 'absolute', bottom: '170px', right: '750px',paddingLeft:'50px',PaddingRight:'250px', marginLeft:'100px', color: 'white' }}>
                    <h1 className="fs-1 fw-bold mt-5 text-light" style={{ letterSpacing: '10px'}}>Turn Your Dream</h1>
                    <div className="mt-4">
                      <span className="fs-1" style={{letterSpacing: '10px', color: '#bba151'}}>into Reality</span>
                    <h5 className="mt-1">Custom Design</h5>
                  {/* <button type="button" class="mt-3 btn btn-dark btn-lg">SEE ALL COLLECTIONS</button> */}
                   <button type="submit" className=" mt-3 btn btn-outline-light mb-4 subscribe-btn" style={{color: '#bba151',backgroundColor:'#010101'}}>SEE ALL COLLECTIONS</button>
                    </div>
                  </div>
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