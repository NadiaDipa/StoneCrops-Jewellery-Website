import React from 'react';
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
import admin from "./../../../assets/admin.jpg";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { handleSubmit, register, reset } = useForm();
    const onSubmit = (data) => {
    fetch("https://still-beach-91758.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          Swal.fire("admin made successfully");

          reset();
        }
      });
  };
    return (
        <Container>
      <div className="row align-items-center bg-light mt-4">
        <div className="col-sm-12 col-lg-6 mt-4">
          <img className="img-fluid mt-5" src={admin} alt="" />
        </div>
        <div className="text-center col-sm-12 col-lg-6">
          <h1 className="fw-bold">Do You Want To Make Another <span className="fw-bold">Admin?</span></h1>
          <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                  className="p-2 m-2"
                  placeholder="Create An Admin..."
                defaultValue=""
                {...register("email", { required: true })}
              />
              <input
                className="btn btn-dark fs-6 pe-3 pt-2 pb-2"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </Container>
    );
};

export default MakeAdmin;