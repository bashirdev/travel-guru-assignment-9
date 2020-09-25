import React from 'react';
import './Footer.css';

const getYear=new Date().getFullYear();
const Footer = () => {
    return (
        <div className='footer'>
           <p>All Right reserved &copy; travel guru {getYear}</p>
            
        </div>
    );
};

export default Footer;