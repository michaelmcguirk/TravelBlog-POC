import React from 'react';
import {NavLink} from 'react-router-dom';

export default ({close}) => (
    <div className="nav-menu">
        <ul>
            <li onClick={close}><NavLink to="/Home">Home</NavLink></li>
            <li onClick={close}><NavLink to="/About"> About</NavLink></li>
        </ul>
    </div>
)