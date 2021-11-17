import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Product = (props) => {
  const { name, description, price, _id, image } = props.product;
  return (
  
      
    
    <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
      
      <div>
        
         <div
        className="card mx-auto  border border-3 rounded-5 m-2 testimonial-card h-50 shadow"
        style={{ width: "18rem"}}
      >
        <div className="glasses">
          <img style={{height: '200px', objectFit:'cover'}} src={image} className="card-img-top img-fluid border-bottom" alt="..." />
          
        </div>
          
          <div className="card-body text-start m-0 bg-black">
            
          <h5 className="card-title text-center text-light">{name}</h5>

          <div className="text-danger mt-3 text-center">
            <p className="text-muted"><span className="fs-6 fw-bold">Model:</span> {description}</p>
            <span className="fw-bold text-center">
              <p className="fs-6 "></p> {price}
            </span>
          </div>

          <Link to={`/booking/${_id}`}>
            {/* <Button className="btn btn-primary w-100 fw-bold">
              Add to Cart
            </Button> */}
             <input
              className="btn w-100 m-2 mx-auto btn btn-outline-light subscribe-btn"
              type="submit"
              style={{color:'#bba151', backgroundColor: '#0c0c0c'}}
              value="Add To Cart"
              />
          </Link>
        </div>
      </div>
    </div>
     
    </div>
   
    
  );
};

export default Product;
