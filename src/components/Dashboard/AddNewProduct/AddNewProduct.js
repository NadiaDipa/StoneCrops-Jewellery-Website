import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddNewProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
    console.log(data);

    fetch("https://still-beach-91758.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          Swal.fire("Uploaded Successfully");
          reset();
        }
      });
  };
    return (
        <div className=" add-container">
        <h3 style={{letterSpacing:'2px'}} className="text-center text-dark text-dark fw-bold border-bottom border-dark w-25 mx-auto mt-5">Add A Product</h3>
        <div className="data-form mt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <input
            {...register("name")}
            placeholder="Enter Your Product Name"
            className="p-2 m-2 w-50 text-center"
            required
          />

          {/* details */}
          <input
            {...register("description")}
            placeholder="Enter Product Details"
            className="p-2 m-2 w-50 text-center "
            required
          />

          {/* image */}
          <input
            {...register("image")}
            placeholder="Enter a Valid Image Url"
            className="p-2 m-2 w-50 text-center "
            required
          />

          {/* price */}
          <input
            {...register("price")}
            placeholder="Enter Product Price"
            className="p-2 m-2 w-50 text-center "
            required
          />

          <input
            type="submit"
            value="Add Product"
            className="fw-bold text-light bg-dark p-2 m-2 w-50"
          />
        </form>
      </div>
    </div>
    );
};

export default AddNewProduct;