import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';


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
                   <div>
                        <h1 className="text-center fw-bold mt-4">
                        <span className="border-bottom border-dark" style={{ color: '#000002', letterSpacing: '5px' }}>OUR EXCLUSIVE COLLECTION</span>
                        </h1>
                        <h5 className="mb-4" style={{letterSpacing:'5px', color: '#000002'}}>Fashion For Move Live Every Moment</h5>
                    </div>
                  {products.map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))}
          </div>
        </div>
    );
};

export default Explore;