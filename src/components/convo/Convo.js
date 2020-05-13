import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import './Convo.scss';
import { sendMessage, removeMessage } from '../../actions/chats';
import { animateScroll } from "react-scroll";

export function Convo(props) {

    useEffect(() => {
        scrollToBottom();
    })

    function scrollToBottom() {
        animateScroll.scrollToBottom({
          containerId: "uselessPieceOfShit"
        });
    }

    const id = props.match.params.id;
    const [text, setText] = useState('');
    const [clickedMessageIndex, setClickedMessage] = useState(-1);

    const handleSend = () => {
        if(text) {
            props.sendMessage(id, text);
            setText('');
            document.getElementById('message-input').value = '';
            document.getElementById("message-input").focus();
        }
    }

    const handleRemove = (sender_uid, index) => {
        if(props.uid === sender_uid && clickedMessageIndex == index) {
            props.removeMessage(id, index);
            setClickedMessage(-1);
        } else {
            setClickedMessage(index);
        }
    }

    let index = null;
    for(let i = 0; i < props.chatList.length; i++) {
        if(props.chatList[i].chatId == id) {
            index = i;
            break;
        }
    }

    let messages = index === null ? null : props.chatList[index].messages.map((message, index) => {
        return <li key={message.message_id} className={"message-bubble " + (message.sender_uid == props.uid ? "sent-by-user" : null)} onClick={() => handleRemove(message.sender_uid, index)}>{message.content}</li>
    })

    return (
        <div className='convo'>
            <div className="convo-header">
                <h2 className="convo-header-name">Julian</h2>
            </div>
            <ul className="convo-messages" id="convo-messages">
                {messages}
            </ul>
            
            <div className="input-flex">
                <TextField id="message-input" className="message-input" label="Your message..." onChange={(e) => setText(e.target.value)} />
                <Button variant="contained" className="message-send" onClick={() => handleSend()}>Send</Button>
            </div>
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
        sendMessage: (conversationId, content) => dispatch(sendMessage(conversationId, content)),
        removeMessage: (conversationId, messageIndex) => dispatch(removeMessage(conversationId, messageIndex))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Convo));