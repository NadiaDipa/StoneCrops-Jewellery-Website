import React from 'react';
import { useForm } from 'react-hook-form';


// import review from "./../../../images/undraw_for_review_eqxk.png";
import Swal from "sweetalert2";
import useAuth from '../../../Hooks/useAuth';


const Reviews = () => {
    const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset
    
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://still-beach-91758.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank You for your feedback",
            showConfirmButton: false,
            timer: 1500,
          });
          // alert("review added successfully");
          reset();
        }
      });
  }
    return (
        <div
      className="container-fluid"
     
    >
      <h1 className="pt-5 fw-bold" >
        Give Your Review Here
      </h1>

      <div className="row mx-auto py-5 ">
        <div className="col-md-6 col-sm-12 align-self-center">
          <img className="img-fluid" style={{height: '400px'}} src="https://image.freepik.com/free-vector/happy-man-holding-five-golden-stars-customer-review-social-media-flat-illustration_74855-14060.jpg" alt="" />
        </div>

        <div className="col-md-6 col-sm-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              placeholder="Enter Your Name"
              className="p-2 m-2 w-75 border border-dark rounded-2"
              defaultValue={user?.Name}
            />

            <input
              className="p-2 m-2 w-75 border border-dark rounded-2"
              placeholder="City"
              defaultValue=""
              {...register("city")}
            />

            <input
              {...register("rating")}
              className="p-2 m-2 w-75 border border-dark rounded-2"
              placeholder="Give your rating 1-5"
              required
            />

            <textarea
              {...register("comment")}
              rows="5"
              cols="15"
              className="p-2 m-2 w-75 border border-dark rounded-2"
              placeholder="Write your experience here..."
              required
            />

            <input
              type="submit"
              value="SEND REVIEW"
              className="btn w-75 bg-dark fw-bold rounded-2 text-white pt-2 pb-2"
              
            />
          </form>
        </div>
      </div>
    </div>
    );
};

export default Reviews;