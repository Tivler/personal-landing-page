import React from 'react';
import './_Nav.scss';

import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <nav className="nav">
            <div className="nav__logo--wrapper">
                <Link to="/" className="nav__logo">Thomas McKyer</Link>
            </div>

            <div className="nav__list">
                <NavLink to="/" className="nav__list__item">About</NavLink>
                <NavLink to="/work" className="nav__list__item nav__list--divider">Work</NavLink>
                <NavLink to="/gallery" className="nav__list__item">Photography</NavLink>
            </div>
        </nav>
        </>
    )
}

export default Nav;