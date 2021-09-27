// React
// eslint-disable-next-line
import { React, useState } from 'react';
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

// CSS
import './MainMenu.css';

// Loader
const override = css`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%) }
    `;

const MainMenu = (props) => {
    const webs = props.data[1] && typeof props.data === 'object' ? JSON.parse(props.data[1]) : null;

    return (
        <div className="card">
            {
                props.isPending === undefined
                ?
                <h2>Type in a username to start</h2>
                :
                !props.isPending
                ?
                typeof props.data === 'string' ? <h1>{props.data}</h1> : 
                (<>
                    {props.data[0] && <h1>Results for {props.data[0]}:</h1>}
                    <section className="basic-grid">
                        {webs && webs.map((e) => (
                            <div key={e.id}>
                                <a href={e.url} target="_blank" rel="noreferrer" className="item">{e.name}</a>
                            </div>
                        ))
                        }
                    </section>
                </>)
                :
                <HashLoader color="#9e9bc9" css={override} size={130} />
            }
        </div >
    );
}

export default MainMenu;