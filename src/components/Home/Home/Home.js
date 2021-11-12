// import React from 'react';
// import Banner from '../../Banner/Banner';
// import OurBlog from '../../OurBlog/OurBlog';

// import RareCollections from '../../RareCollections/RareCollections';

// import Services from '../Services/Services';

// const Home = () => {
   
//     return (
//         <div>
//             <Banner></Banner>
//             <Services></Services>
//             <RareCollections></RareCollections>
//             <OurBlog></OurBlog>
           
//         </div>
//     );
// };

// export default Home;





import React from 'react';
import useFirebase from '../../../Hook/useFirebase';

import Banner from '../../Banner/Banner';
import OurBlog from '../../OurBlog/OurBlog';
import RareCollections from '../../RareCollections/RareCollections';

import Services from '../Services/Services';

const Home = () => {
    const { isLoading } = useFirebase();
    if (isLoading) {
        return  <div className="spinner-border text-danger mt-5 mb-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
    }
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OurBlog></OurBlog>
            <RareCollections></RareCollections>
            {/* <Subscribe></Subscribe>
            <About></About>
            <Partner></Partner> */}
           
        </div>
    );
};

export default Home;