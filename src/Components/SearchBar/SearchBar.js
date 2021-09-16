// React
import React from 'react';
import { Icon } from '@iconify/react';

// CSS
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-box">
            @
            <input type="text" className="input" placeholder="username" />
            <Icon icon="akar-icons:search" className="icon" />
        </div>
    );
}

export default SearchBar;
