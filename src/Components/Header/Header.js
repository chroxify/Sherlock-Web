// React
import React from 'react';
import Image from '../../Images/Github-Mark.png'

// CSS
import './Header.css';

const Header = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className="header">
            <p className="text">Made with ❤️ by Chroxify</p>

            <img src={Image} alt="" className="gt-logo" onClick={() => openInNewTab("https://github.com/Chroxify/Sherlock-Web")} />

        </div>
    );
}

export default Header;