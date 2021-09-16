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
                <div className="item"> <Icon icon="dashicons:yes" className="icon-yes" /> 1ajishahsahzshasa</div>
                <div className="item">2</div>
                <div className="item">3</div>
                <div className="item">4</div>
                <div className="item">5</div>
                <div className="item">6</div>
                <div className="item">7</div>
                <div className="item">8</div>
                <div className="item">9</div>
                <div className="item">10</div>
                <div className="item">11</div>
                <div className="item">12</div>
            </section>
        </div>
    );
}

export default MainMenu;