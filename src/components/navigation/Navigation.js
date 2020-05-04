  
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCog, faComments, faUser } from '@fortawesome/free-solid-svg-icons'
import './Navigation.scss';

export default function Navigation(props) {

    return (
        <BottomNavigation value="matching" className="navigation-bar">
            <BottomNavigationAction label="Matching" value="matching" icon={<FontAwesomeIcon className="navigation-icon" icon={faHeart} />} />
            <BottomNavigationAction label="Profile" value="profile" icon={<FontAwesomeIcon className="navigation-icon" icon={faUser} />} />
            <BottomNavigationAction label="Messages" value="messages" icon={<FontAwesomeIcon className="navigation-icon" icon={faComments} />} />
            <BottomNavigationAction label="Settings" value="settings" icon={<FontAwesomeIcon className="navigation-icon" icon={faCog} />} />
        </BottomNavigation>
    );
}