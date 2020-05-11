import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Login.scss';
import LoginForm from '../../components/loginForm/LoginForm';

export function Login(props) {

    return (
        <Fragment>
            <LoginForm />
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(Login));