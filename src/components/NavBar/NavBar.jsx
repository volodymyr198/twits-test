import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './NavBar.module.css';

export const NavBar = () => {
    return (
        <header className={css.header__wrapper}>
            <nav className={css.nav}>
                <NavLink to='/' className={css.link}>Home</NavLink>
                <NavLink to='/tweets' className={css.link}>Tweets</NavLink>
            </nav>
        </header>
    );
};
