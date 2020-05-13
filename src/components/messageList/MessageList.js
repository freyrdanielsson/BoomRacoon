import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import './MessageList.scss';
import { fetchChats } from '../../actions/chats';


export function MessageList(props) {
    const { fetchChats } = props

    useEffect(() => {
        fetchChats();
    }, [fetchChats])

    let convoNotStarted = !props.chatList ? null : props.chatList.map(chat => {
        if (!chat.messages.length) {
            return (
                <ListItem button className="new-match" key={chat.chatId}>
                    <Link to={"/chat/" + chat.chatId} style={{ textDecoration: 'none', color: 'black' }}>
                        <Avatar alt={props.uid} src={require('../../assets/images/tennis-woman.jpg')} className="new-match-avatar" />
                        <ListItemText primary={chat.user_uid_one !== props.uid ? chat.user_uid_one : chat.user_uid_two} className="new-match-name" />
                    </Link>
                </ListItem>
            )
        }
        return null;
    });

    let convoStarted = !props.chatList ? null : props.chatList.map(chat => {
        if (chat.messages.length) {
            return (
                <Link to={"/chat/" + chat.chatId} key={chat.chatId} style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem button alignItems="flex-start" className="convo-match" >
                        <ListItemAvatar>
                            <Avatar alt={props.uid} src={require('../../assets/images/nature-woman.jpg')} className="convo-match-avatar" />
                        </ListItemAvatar>
                        <ListItemText primary={chat.user_uid_one !== props.uid ? chat.user_uid_one : chat.user_uid_two} secondary={chat.messages[chat.messages.length - 1].content + '\n' /* +  chat.messages[chat.messages.length-1].time.toDate().toString().split(" GMT")[0] */} className="convo-match-text" />
                    </ListItem>
                </Link>
            )
        }
        return null;
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
        randomnumber: state.chats.randomnumber,
        uid: state.firebase.auth.uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChats: () => dispatch(fetchChats())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageList));