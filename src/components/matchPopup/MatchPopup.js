import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Avatar } from '@material-ui/core';
import Zoom from 'react-reveal/Zoom';

import './MatchPopup.scss';

export function MatchPopup(props) {
    const { profile, user, keepSwiping, matchChat } = props;

    // Looks bad when desktop view is chosen due to absolute positioning

    return (
        
        <div className='match-popup'>
            <Zoom>
                <div className="racoon">
                    <img src={require('../../assets/images/racoon.png')} className="racoon-image" alt=""></img>
                </div>
                <h1 className="boom">BOOM!</h1>
            </Zoom>
            <Zoom delay={1000}>
                <div className="match-avatars-flex">
                    <Avatar alt="Picture description" src={profile.pics[0].url} className="match-success-avatar" />
                    <Avatar alt="Picture description" src={user.pics[0].url} className="match-success-avatar" />
                </div>
                <h2 className="matched-text">You have matched with<br /><b>{user.name}</b></h2>
            </Zoom>
            <Zoom delay={2000}>
                <Button onClick={matchChat} className="talk-now" variant="contained" color="primary" fullWidth>Talk right away!</Button>
                <Button onClick={keepSwiping} className="keep-swiping" variant="contained" fullWidth>Keep swiping</Button>
            </Zoom>
        </div>
    );
}



export default withRouter((MatchPopup));