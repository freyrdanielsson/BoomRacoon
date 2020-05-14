
import React, { useState, useEffect } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComments, faUser } from '@fortawesome/free-solid-svg-icons'
import './Navigation.scss';

export default function Navigation(props) {
    const [navbarSelect, setNavbarSelect] = useState(props.location.pathname);

useEffect(() => {
    setNavbarSelect(props.location.pathname)
}, [props.location.pathname])

    const navigate = value => {
        props.history.push(value)
        setNavbarSelect(value);
    }

    // Wrapping BottomNavigationAction into NavLink causes error
    return (
        <BottomNavigation value={navbarSelect} className="navigation-bar">
            <BottomNavigationAction label="Matching" value="/matching" icon={<FontAwesomeIcon className="navigation-icon" icon={faHeart} />} onClick={() => navigate("/matching")} />} />
            <BottomNavigationAction label="Profile" value="/" icon={<FontAwesomeIcon className="navigation-icon" icon={faUser} />} onClick={() => navigate("/")} />} />
            <BottomNavigationAction label="Chat" value="/chat" icon={<FontAwesomeIcon className="navigation-icon" icon={faComments} />} onClick={() => navigate("/chat")} />} />
        </BottomNavigation>
    );
}