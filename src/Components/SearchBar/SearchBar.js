// React
import React from 'react';
import { Icon } from '@iconify/react';

// CSS
import './SearchBar.css';

const SearchBar = (props) => {
    const data = [];

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.target.value) {
            props.setisPending(true);
            data.push(e.target.value);
            console.log(data);

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "args": e.target.value
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://127.0.0.1:8000/cli/", requestOptions)
                .then(response => response.text())
                .then(result => {
                    const obj = JSON.parse(result);
                    data.push(obj);
                    props.setData(data);
                    props.setisPending(false);

                })
                .catch(error => {
                    console.log('error', error);
                    props.setisPending(false);
                });
        }
    }

    return (
        <div className="search-box">
            @
            <input type="text" className="input" placeholder="username" onKeyDown={_handleKeyDown} disabled={props.isPending} />
            <Icon icon="akar-icons:search" className="icon" />
        </div>
    );
}

export default SearchBar;
