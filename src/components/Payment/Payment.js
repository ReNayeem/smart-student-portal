import React from 'react';
import './Payment.css'

const Payment = () => {
    return (
        <div className='custom-container payment'>
            <div className='custom-padding custom-container2'>
                <div className='custom-width'>
                    <div className='payment-details d-flex'>
                        <div>
                            <h2 className='mt-1'>Payment Details</h2>
                            <div className='d-flex'>
                                <div className='payment-first-first-section'>
                                    <i class="fa-solid fa-wallet"></i>
                                    <h5>Payable</h5>
                                    <h3>৳888888</h3>
                                </div>
                                <div className='payment-first-second-section'>
                                    <h5>Total Paid</h5>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='payment-first-third-section'>
                                <h5>Semester Due</h5>
                            </div>
                            <div>
                                <h2>Upcoming Payment</h2>
                                <div className='payment-first-fourth-section'>
                                    <h5>UP</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;