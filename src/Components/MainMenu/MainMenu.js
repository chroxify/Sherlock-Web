// React
import React from 'react';
import { Icon } from '@iconify/react';

// CSS
import './MainMenu.css';

const MainMenu = () => {
    return (
        <div className="card">
            <h1>Results for Chroxify:</h1>
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
        </div>
    );
}

export default MainMenu;