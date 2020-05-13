
import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCog, faComments, faUser } from '@fortawesome/free-solid-svg-icons'
import './Navigation.scss';

export default function Navigation(props) {
    const [navbarSelect, setNavbarSelect] = useState(props.location.pathname);

    const navigate = value => {
        props.history.push("/" + value)
        setNavbarSelect(value);
    }

    // Wrapping BottomNavigationAction into NavLink causes error
    return (
        <BottomNavigation value={navbarSelect} className="navigation-bar">
            <BottomNavigationAction label="Matching" value="/matching" icon={<FontAwesomeIcon className="navigation-icon" icon={faHeart} />} onClick={() => navigate("/matching")} />} />
            <BottomNavigationAction label="Profile" value="/profile" icon={<FontAwesomeIcon className="navigation-icon" icon={faUser} />} onClick={() => navigate("/profile")} />} />
            <BottomNavigationAction label="Messages" value="/messages" icon={<FontAwesomeIcon className="navigation-icon" icon={faComments} />} onClick={() => navigate("/messages")} />} />
            <BottomNavigationAction label="Settings" value="/settings" icon={<FontAwesomeIcon className="navigation-icon" icon={faCog} />} onClick={() => navigate("/settings")} />} />
        </BottomNavigation>
    );
}