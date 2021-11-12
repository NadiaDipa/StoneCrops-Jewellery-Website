// import React from 'react';
// import './Subscribe.css'

// const Subscribe = () => {
//     return (
//         <div className="comfort text-danger mx-auto mt-5">
//             <div className="p-3">
//                <img className = "img-fluid" height="20px" width="50%"
//                src = "https://gadnwid.com/wp-content/uploads/2020/09/pathao-food-768x431.jpg.webp"
//                alt = "" />
//             </div>
//             <div className="p-5">
//                 <h2 className="fs-1">Subscribe To Our Newsletter</h2>
//                 <div className="input-group mb-3 mt-4">
//                     <input type="text" className="form-control" placeholder="Enter Your Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2"  />
//                     <span className="input-group-text bg-danger text-black fw-bolder fs-5 p-3" id="basic-addon2">Subscribe Now</span> <br />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Subscribe;

import React from 'react';

const RareCollections = () => {
    return (
        <div>
            <div class="card mb-3">
                <div class="row g-0 mt-5 pt-5" style={{backgroundColor: '#000002'}}>
                    <div class="col-md-4">
                    <img  src="https://4.imimg.com/data4/VX/SN/MY-3520335/diamond-necklace-500x500.jpg" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body" style={{textAlign: 'left'}}>
                        <h5 className="card-title fw-bold fs-1 mb-2" style={{ color: '#bba151', marginLeft: '23px' }}>Rare Collections</h5>
                            
                        <p className="card-text text-light ms-4">A playful and cute collection for occasions when you do not want to wear the high carat but still feel elegant and exclusive in everyday life. <b>CHOKER NECKLACE</b> – the foundation of the exclusive jewelerry wardrobe can be found in this collection. <br />The most expensive and perhaps the most famous jewel in the world is a 45.52 carat white stone known as the Hope Diamond. Experts think its unusual white coloring comes from impurities caused by trace amounts of boron atoms.</p>

                        <br />
                        <p className="text-light ms-4">While they have always been a more high fashion accessory for celebrities, in recent years, men's necklaces have been showing up all over the place and have been a coveted accessory and staple for every guy to have. One specific style of necklace that has become popular for men is the name necklaces.We specialise in engagement rings, bespoke, fine jewellery, repairs and have a vast array of precious and semi-precious coloured stones. Visit us in store or online to see our collection.</p>
                        <button className="p-2 fs-5 fw-bold mb-0" style={{color: '#000000', backgroundColor: '#bba151', borderRadius:'10px', marginLeft: '23px'}}>Read More </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RareCollections;