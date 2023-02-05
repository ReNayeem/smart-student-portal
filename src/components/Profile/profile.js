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

                                <div className='d-flex profile-buttons'>
                                    <a target='_blank' href="https://t.me/FateNayeam"><i class="fa-solid fa-message"></i>Send message</a>
                                    <button>UPDATE PROFILE</button>
                                </div>
                            </div>
                        </div>

                        <hr className='profile-hr' />

                        <div className='profile-second-section'>
                            <div className='profile-second-first-section'>
                                <div>
                                    <h5>PROGRAM</h5>
                                    <p>Bachelor of Science (B.Sc.) 4-Year</p>
                                    <p>Computer Science and Engineering</p>
                                </div>

                                <div>
                                    <h5 className='mt-4'>CAMPUS</h5>
                                    <p>Permanent Campus</p>
                                </div>

                                <hr className='profile-hr-2' />

                                <div>
                                    <div className='d-flex mt-4'>
                                        <h5>CURRENT ADDRESS</h5>
                                        <button>Primary</button>
                                    </div>
                                    <p>40/4 XYZ, Narayanganj</p>
                                </div>

                                <div>
                                    <div className='d-flex mt-4'>
                                        <h5>PERMANENT ADDRESS</h5>
                                        <button>Secondary</button>
                                    </div>
                                    <p>XYZ, Bondor, Narayanganj</p>
                                </div>

                            </div>

                            <hr className='profile-hr-3' />

                            <div className='profile-second-second-section'>
                                <div className='virtual-contact-information'>
                                    <p>VIRTUAL CONTACT INFORMATION</p>
                                    <div className='d-flex'>
                                        <h5 className='profile-text-width'>Phone: </h5>
                                        <h5>+8801794354468</h5>
                                    </div>
                                    <div className='d-flex profile-email'>
                                        <h5 className='profile-text-width'>E-mail: </h5>
                                        <h5>nayeem15-13434@diu.edu.bd</h5>
                                    </div>
                                    <div className='d-flex'>
                                        <h5 className='profile-text-width'>Site: </h5>
                                        <a href="https://renayeem.netlify.com" target='_blank'>renayeem.netlify.com</a>
                                    </div>
                                </div>

                                <hr className='profile-hr-2' />

                                <div className='basic-information'>
                                    <p>BASIC INFORMATION</p>
                                    <div className='d-flex'>
                                        <h5 className='profile-text-width'>Birthday: </h5>
                                        <h5>January 22, 2001</h5>
                                    </div>
                                    <div className='d-flex'>
                                        <h5 className='profile-text-width'>Gender: </h5>
                                        <h5>Male</h5>
                                    </div>
                                    {/* <a href="https://google.com" target='_blank'>click</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default profile;