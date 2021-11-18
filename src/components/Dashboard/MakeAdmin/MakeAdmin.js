import React from 'react';
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
// import admin from "./../../../images/admin.png";
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
      <div className="row align-items-center">
        <div className="col-sm-12 col-lg-6">
          {/* <img className="img-fluid w-75 " src={admin} alt="" /> */}
        </div>
        <div className="text-center col-sm-12 col-lg-6">
          <h1 className="fw-bold">Feeling Alone?</h1>
          <h3>Want To Make An Admin</h3>
          <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="p-2 m-2 w-50"
                defaultValue=""
                {...register("email", { required: true })}
              />
              <input
                className="btn btn-primary w-50"
                type="submit"
                value="send"
              />
            </form>
          </div>
        </div>
      </div>
    </Container>
    );
};

export default MakeAdmin;