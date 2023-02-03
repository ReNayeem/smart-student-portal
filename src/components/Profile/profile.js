import React from 'react';
import './Profile.css';
import profileImg from '../../resources/profileImg/Pro.jpg'

const profile = () => {
    return (
        <div className='custom-container profile'>
            <div className='custom-padding custom-container2'>
                <div className='custom-width'>
                    <div className='profile-details'>
                        <div className='profile-first-section'>
                            <img className='profile-img-2' src={profileImg} alt="" />

                            <div>
                                <div className='d-flex justify-content-between profile-name'>
                                    <div>
                                        <h2>Md. Nayeem</h2>
                                        <h5>Student #: 193-15-13434</h5>
                                    </div>
                                    <h4><i class="fa-solid fa-location-dot"></i><span>Narayanganj, Dhaka</span></h4>
                                </div>


                                <p>OVERALL TERM RATINGS</p>
                                <h3>8,2 <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i className="fa-regular rating fa-star"></i></span></h3>

                                <button>UPDATE PROFILE</button>
                            </div>
                        </div>

                        <div className='profile-second-section'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default profile;