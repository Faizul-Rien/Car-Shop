import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
           <div className="footer-text">
            <h2>How React Works</h2>
           </div>
           <div className="footer-text">
            <h2>Props vs State</h2>
           </div>
           <div className="footer-text">
            <h2>How useState Works</h2>
           </div>
        </div>
    );
};

export default Footer;