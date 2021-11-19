import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Swal from "sweetalert2";

const ManageProducts = () => {
            const [products, setProducts] = useState([]);
                useEffect(() => {
                    fetch("https://still-beach-91758.herokuapp.com/products")
                    .then((res) => res.json())
                    .then((data) => setProducts(data));
                }, []);
                    const deleteProduct = (id) => {
                    Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                    }).then((result) => {
                    if (result.isConfirmed) {
                        const url = `https://still-beach-91758.herokuapp.com/products/${id}`;
                        fetch(url, {
                        method: "DELETE",
                        })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.deletedCount === 1) {
                            // alert("delete successfully");
                            const remaining = products.filter((list) => list._id !== id);
                            setProducts(remaining);
                            }
                        });
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                    }
                    });
                };
        return (
            <div className="my-order-section bg-light mt-3">
                <div className="text-center fw-bold text-white">
                    <h1 className="pt-4 text-dark">Manage All Products</h1>
                    <h4 className="text-dark">Total Products: {products.length}</h4>
                </div>
                <div className="container bg-dark pt-3">
                    <Table striped bordered hover responsive="sm">
                        <thead>
                            <tr>
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <th className="text-white " key={index}>
                                        {" "}
                                        PRODUCT NAME{" "}
                                    </th>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <th className="text-white" key={index}>
                                        PRICE
                                    </th>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <th className="text-white" key={index}>
                                        Delete Product
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        {products.map((list) => (
                            <tbody>
                                <tr>
                                    {Array.from({ length: 1 }).map((_, index) => (
                                        <td className="fw-bold text-white " key={index}>
                                            {list?.name}
                                        </td>
                                    ))}

                                    {Array.from({ length: 1 }).map((_, index) => (
                                        <td className="fw-bold text-white" key={index}>
                                            {list?.price}
                                        </td>
                                    ))}

                                    {Array.from({ length: 1 }).map((_, index) => (
                                        <td key={index}>
                                            <button
                                                onClick={() => deleteProduct(list._id)}
                                                className="mx-3 text-danger"
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
        );
    }
export default ManageProducts;