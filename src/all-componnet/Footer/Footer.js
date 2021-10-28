import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFastBackward } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
            <h2>This Site Create By Tanvir Ahmed</h2>
            <a href="/home">Go To Home <FontAwesomeIcon icon={faFastBackward} /> </a>
        </div>
    );
};

export default Footer;