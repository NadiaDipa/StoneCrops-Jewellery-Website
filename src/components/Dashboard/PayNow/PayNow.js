import React from 'react';
import payment from '../../../assets/payment.jpg'

const PayNow = () => {
    return (
        <div>
            <div className="col mt-5">
                <img src={payment} alt="" />
            </div>
            <h1 style={{letterSpacing:'5px'}} className="fw-bold">SORRY!!!</h1>
            <h3 style={{letterSpacing:'5px'}} className="fw-bold">Payment Coming Soon...</h3>
        </div>
    );
};

export default PayNow;