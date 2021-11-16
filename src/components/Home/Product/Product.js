import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Product = (props) => {
  const { name, description, price, _id, image } = props.product;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div
        className="card mx-auto  border border-3 rounded-5 m-2 testimonial-card"
        style={{ width: "18rem" }}
      >
        <div className="glasses">
          <img src={image} className="card-img-top img-fluid " alt="..." />
          <div className="glass-content">
            <small className="fw-bold">Hot sell</small>
          </div>
        </div>

        <div className="card-body text-start m-0">
          <h5 className="card-title fw-bold text-muted">{name}</h5>

          <div className="text-danger mt-3">
            <p className=" text-muted">Model: {description.slice(0, 15)}</p>
            <span className="fw-bold">
              <sup className="fs-6">$</sup> {price}
            </span>
          </div>

          <Link to={`/booking/${_id}`}>
            <Button className="btn btn-primary w-100 fw-bold">
              Add to Cart
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
