import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const Booking = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const products = data?.find((pack) => pack?._id === id);
        setProducts(products);
        //  reset(products);
      });
  }, [id]);

  const onSubmit = (data) => {
    data.status = "pending";
    delete data._id;
    fetch("http://localhost:5000/allOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("order successfully taken");

          reset();
        }
      });
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const { email, displayName } = user;
  return (
    <div className="container-fluid order-section" style={{backgroundColor:'#424243'}}>
      <div className="container py-5">
        <h1 className="text-center mb-3 fw-bold text-white">
          PLACE YOUR ORDER
        </h1>
        <div className="row mx-auto align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={products?.image}
                    className="img-fluid h-75 m-3 p-3 rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-center">
                    <h5 className="card-title ">{products?.name}</h5>

                    
                    <p className="card-text m-0">
                      Model: {products?.description}
                    </p>
                    
                    <p className="card-text m-0">
                      Price: {products?.price}.
                    </p>

                    

                   
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 data-form">
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="p-2 m-2 w-50"
                defaultValue={products?.name}
                {...register("product_name")}
              />

              <input
                className="p-2 m-2 w-50"
                defaultValue={displayName}
                {...register("Name")}
              />

              <input
                className="p-2 m-2 w-50"
                defaultValue={email}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}
              <input
                className="p-2 m-2 w-50"
                placeholder="Address"
                defaultValue=""
                {...register("address")}
              />
              <input
                className="p-2 m-2 w-50"
                placeholder="City"
                defaultValue=""
                {...register("city")}
              />
              <input
                className="p-2 m-2 w-50"
                placeholder="phone number"
                defaultValue=""
                {...register("phone")}
              />

              {/* <input
                type="submit"
                value="ORDER"
                className="fw-bold text-muted p-2 m-2 w-50"
              /> */}
               <input
                className="btn w-50 m-2 fs-5 fw-bold btn btn-outline-light subscribe-btn"
                type="submit" style={{color:'#bba151', backgroundColor: '#0c0c0c'}}
                value="ORDER"
                />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
