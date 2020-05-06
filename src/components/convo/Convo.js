import React, {useState} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import './Convo.scss';

export function Convo(props) {

    return (
        <div className='convo'>
            <div className="convo-header">
                <h2 className="convo-header-name">Julian</h2>
            </div>
            <ul className="convo-messages">
                <li className="message-bubble sent-by-user">Hi Julian! Saw you were pretty good at Basketball. Wanna play sometime?</li>
                <li className="message-bubble">Sure thing! 8 in skill means you must be pretty good. I have a group I usually play with but I can invite you if you want! They are pretty good but also kind.</li>
                <li className="message-bubble sent-by-user">Sound good for me! Lemme know when’s the next occasion!</li>
                <li className="message-bubble">Will do!</li>
                <li className="message-bubble">Wazzup brother! Me and some boys are gonna play basket at Earl’s court this evening. You in?</li>
            </ul>
            
            <div className="input-flex">
                <TextField id="message-input" className="message-input" label="Your message..." />
                <Button variant="contained" className="message-send">Send</Button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(Convo));