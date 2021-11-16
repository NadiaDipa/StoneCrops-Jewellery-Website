import React from 'react';
import Banner from '../../Banner/Banner';
import OurBlog from '../../OurBlog/OurBlog';
import RareCollections from '../../RareCollections/RareCollections';
import Products from '../Products/Products';
// import Booking from '../Booking/Booking';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <OurBlog></OurBlog>
            <RareCollections></RareCollections>

        </div>
    );
};

export default Home;