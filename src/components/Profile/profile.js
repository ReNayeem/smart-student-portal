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
                                <h2>Md. Nayeem</h2>
                                <h5>B.Sc. at CSE</h5>

                                <p>OVERALL TERM RANKINGS</p>
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