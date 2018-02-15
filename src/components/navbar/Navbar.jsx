import React from 'react';
import { NavLink } from 'react-router-dom';
import { createPortal } from 'react-dom';

const Navbar = () => createPortal(
    <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink exact to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink exact to="/page/1" className="nav-link">Stories</NavLink>
        </li>
    </ul>,
    document.getElementById('navbar')
);

export default Navbar;

/* For "purgecss-webpack-plugin":
 * className="active disabled"
 */
