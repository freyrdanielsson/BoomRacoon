import React, {useState} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import './MessageList.scss';

export function MessageList(props) {

    return (
        <div className='messages'>
                <h3 className="messages-title">New matches (number)</h3>
                <List className="new-matches">
                    <ListItem button className="new-match">
                        <Avatar alt="Picture description" src={require('../../assets/images/tennis-woman.jpg')} className="new-match-avatar" />
                        <ListItemText primary="Carolina" className="new-match-name" />
                    </ListItem>
                    <ListItem button className="new-match">
                        <Avatar alt="Picture description" src={require('../../assets/images/tennis-woman.jpg')} className="new-match-avatar" />
                        <ListItemText primary="Carolina" className="new-match-name" />
                    </ListItem>
                    <ListItem button className="new-match">
                        <Avatar alt="Picture description" src={require('../../assets/images/tennis-woman.jpg')} className="new-match-avatar" />
                        <ListItemText primary="Carolina" className="new-match-name" />
                    </ListItem>
                    <ListItem button className="new-match">
                        <Avatar alt="Picture description" src={require('../../assets/images/tennis-woman.jpg')} className="new-match-avatar" />
                        <ListItemText primary="Carolina" className="new-match-name" />
                    </ListItem>
                    <ListItem button className="new-match">
                        <Avatar alt="Picture description" src={require('../../assets/images/tennis-woman.jpg')} className="new-match-avatar" />
                        <ListItemText primary="Carolina" className="new-match-name" />
                    </ListItem>
                    <ListItem button className="new-match">
                        <Avatar alt="Picture description" src={require('../../assets/images/tennis-woman.jpg')} className="new-match-avatar" />
                        <ListItemText primary="Carolina" className="new-match-name" />
                    </ListItem>
                </List>
                <h3 className="messages-title">Conversations</h3>
                <List className="match-convos">
                    <ListItem button alignItems="flex-start" className="convo-match">
                        <ListItemAvatar>
                            <Avatar alt="Picture description" src={require('../../assets/images/nature-woman.jpg')} className="convo-match-avatar" />
                        </ListItemAvatar>
                        <ListItemText primary="Emma" secondary="You: It was fun boxing with ya, even though I underperformed... Up for another one next week? :)" className="convo-match-text" />
                    </ListItem>
                    <ListItem button alignItems="flex-start" className="convo-match">
                        <ListItemAvatar>
                            <Avatar alt="Picture description" src={require('../../assets/images/basket-teen.jpg')} className="convo-match-avatar" />
                        </ListItemAvatar>
                        <ListItemText primary="Julian" secondary="Wazzup brother! Me and some boys are gonna play basket at Earl’s court this evening. You in?" className="convo-match-text" />
                    </ListItem>
                </List>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(MessageList));