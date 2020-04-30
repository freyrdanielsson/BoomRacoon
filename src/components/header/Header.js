  
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { logoutUser } from '../../actions/auth';

import './Header.scss';

export default function Header(props) {
    const { isAuth, dispatch } = props

    // Check if user is logged in (this will always be a link until we implement users)
    const toDisplay = isAuth ? <p onClick={() => dispatch(logoutUser())}>Logout</p>
        : <NavLink activeClassName='header__link--selected' exact to='/login'>Login</NavLink>;

    return (
        <header className='header'>
            <h1 className='header__title'>
                <Link to='/'>Bin-Go</Link>
            </h1>

            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__item'><NavLink activeClassName='header__link--selected' exact to='/example'>Example</NavLink></li>
                    <li className='header__item'>{toDisplay}</li>
                </ul>
            </nav>

        </header>
    );
}