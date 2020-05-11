import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Conversation.scss';
import Convo from '../../components/convo/Convo';

export function Conversation(props) {

    return (
        <Fragment>
            <Convo />
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(Conversation));