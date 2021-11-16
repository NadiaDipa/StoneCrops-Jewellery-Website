import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { Container, Spinner } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //  const { loading } = useAuth();

  //  if (loading) {
  //    return (
  //      <div className="text-center my-5 py-5">
  //        <Spinner animation="border" role="status">
  //          <span className="visually-hidden">Loading...</span>
  //        </Spinner>
  //      </div>
  //    );
  //  }

  return (
    <Container className="mt-5">
      <div>
        <h1 className="text-center fw-bold mb-5">
          <span className="text-info">OUR</span> PRODUCTS
        </h1>
      </div>

      <div className="row">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </Container>
  );
};

export default Products;
