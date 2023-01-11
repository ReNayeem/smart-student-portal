import React from 'react';
import './Navbar.css';
import logo from '../../resources/logos/logo5.png'
import profileImg from '../../resources/profileImg/Pro.jpg'
import logoOriginal from '../../resources/logos/university.png'

const Navbar = () => {
    return (
        <div className='custom-container custom-navbar sticky-top'>
            <div className='custom-navbar2'>
                <div><img className='profile-img2' src={profileImg} alt="" /></div>
                <div><img className='logo2' src={logo} alt="" /></div>
            </div>
        </div>
    );
};

export default Navbar;