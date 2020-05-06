import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Paper, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import './MatchPopup.scss';

export function MatchPopup(props) {

    // Looks bad when desktop view is chosen due to absolute positioning

    return (
        <div className='match-popup'>
            <div className="racoon">
                <img src={require('../../assets/images/racoon.png')} className="racoon-image" alt=""></img>
            </div>
            <h1 className="boom">BOOM!</h1>
            <div className="match-avatars-flex">
                <Avatar alt="Picture description" src={require('../../assets/images/boxing-boy.jpg')} className="match-success-avatar" />
                <Avatar alt="Picture description" src={require('../../assets/images/tennis-woman.jpg')} className="match-success-avatar" />
            </div>
            <h2 className="matched-text">You have matched with<br /><b>Carolina!</b></h2>
            <Button className="talk-now" variant="contained" color="primary" fullWidth>Talk right away!</Button>
            <Button className="keep-swiping" variant="contained" fullWidth>Keep swiping</Button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(MatchPopup));