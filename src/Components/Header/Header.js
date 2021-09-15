// React
import React from 'react';
import Image from '../../Images/Github-Mark.png'
// CSS
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <p className="text">Made with ♥️ by Chroxify</p>
            <a href="https://github.com/Chroxify/Sherlock-Web">
                <img src={Image} alt="" className="gt-logo" />
            </a>
        </div>
    );
}

export default Header;