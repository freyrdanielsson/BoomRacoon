
import React from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, IconButton, } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import './Header.scss';

function Header(props) {
    const { back } = props;
    
    return (
        <>
            <AppBar position="static" className="header-bar">
                <Toolbar className="toolbar-bar">
                    <div className="header-flex">
                        {back.active &&
                            <div className="header-flex-1">
                                <IconButton onClick={back.cb} className="back-button"><FontAwesomeIcon icon={faChevronLeft} className="back-button-icon" /></IconButton>
                            </div>
                        }

                        <div className="header-flex-2">
                            <IconButton className="header-title">Boom Racoon</IconButton>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        back: state.header,
    }
}

export default connect(mapStateToProps)(Header);