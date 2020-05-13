import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setFunction } from '../../actions/header';

import Convo from '../../components/convo/Convo';

import './Conversation.scss';

export function Conversation(props) {

    const updateHeader = (active) => {
        const f = () => {
            props.history.push('/chat');
        }
        props.dispatch(setFunction(f, active));
    }

    return (
        <Fragment>
            <Convo updateHeader={updateHeader} />
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(Conversation));