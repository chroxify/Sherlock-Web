// React
import React from 'react';
import { Icon } from '@iconify/react';

// CSS
import './SearchBar.css';

const SearchBar = ({ data, setData }) => {
    const _handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.target.value) {
            setData(e.target.value);
        }
    }

    return (
        <div className="search-box">
            @
            <input type="text" className="input" placeholder="username" onKeyDown={_handleKeyDown} disabled={data} />
            <Icon icon="akar-icons:search" className="icon" />
        </div>
    );
}

export default SearchBar;
