import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='custom-container'>
            <div className='custom-padding'>

                <div className='d-flex'>
                    <div className='custom-width'>


                        <h1 className='pt-4 welcome-dashboard'>My Dashboard</h1>
                        <p className='hi-dashboard'>Welcome back Nayeem, ready for another day of your UNI life?🔥</p>


                        <h3 className='active-dashboard mt-3'>Active Courses</h3>
                    </div>
                    <div>
                        <h3 className='pt-4 welcome-dashboard'>Upcoming</h3>
                        <div className='d-flex mt-3'>
                            <div className='me-4 d-flex align-items-center'>
                                <h3>Payment</h3>
                            </div>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <p class="title-card mt-3">29,872 TK</p>
                                        <p>Hover</p>
                                    </div>
                                    <div class="flip-card-back">
                                        <p class="title-card mt-3">Mid-Term</p>
                                        <p>22/2/23</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;