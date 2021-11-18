import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

const ShowFeedback = ({review}) => {
    const { name, city, rating, comment } = review
    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
        <div
          className="card mx-auto my-2 testimonial-card "
          style={{ width: "18rem" }}
        >
          <div className="card-header bg-white">
            <Rating
              readonly
              style={{color:'#FDCC0D'}}
              initialRating={rating}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">{rating}</span>
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p
                style={{ fontSize: "14px", textAlign: "left" }}
                className="text-muted"
              >
                {comment}
              </p>
              <hr />
              <footer
                className="blockquote-footer fw-bold"
                style={{ fontSize: "16px", color: "#163336" }}
              >
                {name}, <cite title="Source Title">{city}</cite>
                <br />
                <div className="fw-0"><small className="text-muted" style={{marginLeft: '190px'}}>Customer</small></div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
};

export default ShowFeedback;