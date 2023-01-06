import React from 'react';
import './footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="footer custom-container text-center">
            <p className="footer-text custom-padding">&copy; {year}. Smart Student Portal. All rights reserved.</p>
        </footer>
    );
};

export default Footer;