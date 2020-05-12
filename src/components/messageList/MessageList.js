import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import './MessageList.scss';
import { fetchChats } from '../../actions/chats';


export function MessageList(props) {

    useEffect(() => {
        props.fetchChats();
    }, [])

    let convoNotStarted = props.chatList.map(chat => {
        if(!chat.messages.length) {
            return (<ListItem button className="new-match" key={chat.chatId}>
                <Avatar alt={props.uid} src={require('../../assets/images/tennis-woman.jpg')} className="new-match-avatar" />
                <ListItemText primary={chat.user_uid_one !== props.uid ? chat.user_uid_one : chat.user_uid_two} className="new-match-name" />
            </ListItem>)
        }
    });

    let convoStarted = props.chatList.map(chat => {
        if(chat.messages.length) {
            return (<ListItem button alignItems="flex-start" className="convo-match" key={chat.chatId}>
                <ListItemAvatar>
                    <Avatar alt={props.uid} src={require('../../assets/images/nature-woman.jpg')} className="convo-match-avatar" />
                </ListItemAvatar>
                <ListItemText primary={chat.user_uid_one !== props.uid ? chat.user_uid_one : chat.user_uid_two} secondary={chat.messages[chat.messages.length-1].content} className="convo-match-text" />
            </ListItem>)
        }
    });
    
    return (
        <div className='messages'>
                <h3 className="messages-title">New matches</h3>
                <List className="new-matches">
                    {convoNotStarted}
                </List>
                <h3 className="messages-title">Conversations</h3>
                <List className="match-convos">
                    {convoStarted}
                </List>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        chatList: state.chats.chatList,
        uid: state.firebase.auth.uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChats: () => dispatch(fetchChats())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageList));