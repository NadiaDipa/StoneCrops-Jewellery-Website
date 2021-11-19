import React from 'react';
import graph from '../../../assets/graph-3.jpg'

const DashboardHome = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h5 className="navbar-brand" className="fw-bold mt-3 ms-2" >StoneCrops DashBoard</h5>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0" style={{marginLeft:'330px'}}>
                        <input className="p-1" type="search" placeholder="Search" />
                        <button className="btn btn-outline-dark my-2 my-sm-0 fw-bold" type="submit">Search</button>
                            
                    </form>
                </div>
            </nav>


            <div className="row ">
                <div className="col ">
                    <div className="card" style={{color:'#bba151', backgroundColor:'#010101'}}>
                        <div className="card-body">
                            <h5 className="card-title fw-bold text-light fs-4">250</h5>
                            <p className="card-text" style={{letterSpacing:'2px'}}>Products Viewed Today</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{color:'#bba151', backgroundColor:'#010101'}}>
                        <div className="card-body">
                            <h5 className="card-title fw-bold text-light fs-4">12</h5>
                            <p className="card-text" style={{letterSpacing:'2px'}}>Products Sold</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{color:'#bba151', backgroundColor:'#010101'}}>
                        <div className="card-body">
                            <h5 className="card-title fw-bold text-light fs-4">15</h5>
                            <p className="card-text"style={{letterSpacing:'2px'}}>Stock Scans Performed</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{color:'#bba151', backgroundColor:'#010101'}}>
                        <div className="card-body">
                            <h5 className="card-title fw-bold text-light fs-4">20</h5>
                            <p className="card-text"style={{letterSpacing:'2px'}}>Top Item Viewed</p>
                        </div>
                    </div>
                </div>
                
            </div>


            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <img style={{width:'810px', height: '350px'}} src="https://assets.digitalocean.com/articles/eng_javascript/d3-barchart/d3-bar-chart-black.png" alt="" />
                    </div>
                  
                </div>
            </div>
            <div className="container mb-5">
                 <div className="row">
                    <div className="col mt-5">
                        <div className="col">
                            <img style={{height:'250px'}} src="https://static.thenounproject.com/png/986778-200.png" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="col mt-5">
                            <img style={{height:'250px'}} src="https://static.thenounproject.com/png/489026-200.png" alt="" />
                        </div>
                    </div>
                    <div className="col">
                         <div className="col mt-5">
                            <img style={{height:'250px'}} className="img-fluid" src={graph} alt="" />
                        </div>
                    </div>
                </div>
              
            </div>

            
        </div>
    
    );
};

export default DashboardHome;