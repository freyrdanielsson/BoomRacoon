import React, {useState} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import './Convo.scss';
import { sendMessage} from '../../actions/chats';

export function Convo(props) {

    const id = props.match.params.id;
    const [text, setText] = useState(''); // email, pwd

    const handleChange = (e)  => {
        let temp = e.target.value;
        setText(temp);
    }

    const handleSend = () => {
        if(text) {
            props.sendMessage(id, text);
        }
    }

    let index = null;
    for(let i = 0; i < props.chatList.length; i++) {
        if(props.chatList[i].chatId == id) {
            index = i;
            break;
        }
    }

    let messages = index === null ? null : props.chatList[index].messages.map(message => {
        return <li key={message.message_id} className={"message-bubble " + (message.sender_uid == props.uid ? "sent-by-user" : null)}>{message.content}</li>
    })

    return (
        <div className='convo'>
            <div className="convo-header">
                <h2 className="convo-header-name">Julian</h2>
            </div>
            <ul className="convo-messages">
                {messages}
            </ul>
            
            <div className="input-flex">
                <TextField id="message-input" className="message-input" label="Your message..." onChange={(e) => handleChange(e)} />
                <Button variant="contained" className="message-send" onClick={() => handleSend()}>Send</Button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        chatList: state.chats.chatList,
        uid: state.firebase.auth.uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (conversationId, content) => dispatch(sendMessage(conversationId, content))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Convo));