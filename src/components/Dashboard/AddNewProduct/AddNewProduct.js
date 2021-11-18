import React from 'react';
import { useForm } from 'react-hook-form';

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
          alert("uploaded successfully");
          reset();
        }
      });
  };
    return (
        <div className=" add-container ">
        <h3 className="text-center text-dark text-white fw-bold">Add A Product</h3>
        <div className="data-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <input
            {...register("name")}
            placeholder="Product Name"
            className="p-2 m-2 w-50 text-center"
            required
          />

          {/* price */}
          <input
            {...register("description")}
            placeholder="Details"
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
            placeholder="Price"
            className="p-2 m-2 w-50 text-center "
            required
          />

          <input
            type="submit"
            value="Add Product"
            className="fw-bold  text-muted p-2 m-2 w-50"
          />
        </form>
      </div>
    </div>
    );
};

export default AddNewProduct;