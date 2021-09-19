// React
// eslint-disable-next-line
import { React, useState } from 'react';
import { Icon } from '@iconify/react';
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

const MainMenu = ({ data, setData }) => {
    return (
        <div className="card">
            {!data
                ?
                (<>
                    <h1>Results for {data}:</h1>
                    <section className="basic-grid">
                        <a href="/#" target="_blank" className="item"> <Icon icon="dashicons:yes" className="icon-yes" /> 1</a>
                        <a href="/#" target="_blank" className="item">2</a>
                        <a href="/#" target="_blank" className="item">3</a>
                        <a href="/#" target="_blank" className="item">4</a>
                        <a href="/#" target="_blank" className="item">5</a>
                        <a href="/#" target="_blank" className="item">6</a>
                        <a href="/#" target="_blank" className="item">7</a>
                        <a href="/#" target="_blank" className="item">8</a>
                        <a href="/#" target="_blank" className="item">9</a>
                        <a href="/#" target="_blank" className="item">10</a>
                        <a href="/#" target="_blank" className="item">11</a>
                        <a href="/#" target="_blank" className="item">12</a>
                    </section>
                </>)
                :
                (
                    <HashLoader color="#9e9bc9" css={override} size={130} />
                )
            }
        </div >
    );
}

export default MainMenu;