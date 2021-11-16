import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';
import Products from '../Home/Products/Products';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then( res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="row">
                  {products.map((product) => (
                    <Product key={product._id} product={product}></Product>
                    ))}
          </div>
        </div>
    );
};

export default Explore;