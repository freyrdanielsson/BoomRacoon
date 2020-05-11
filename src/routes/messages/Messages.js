import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Messages.scss';
import MessageList from '../../components/messageList/MessageList';

export function Messages(props) {

    return (
        <Fragment>
            <MessageList />
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(Messages));