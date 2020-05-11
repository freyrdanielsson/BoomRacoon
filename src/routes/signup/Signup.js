import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Signup.scss';
import SignupForm from '../../components/signupForm/SignupForm';

export function Signup(props) {
    console.log(props);
    

    return (
        <Fragment>
            <SignupForm />
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(Signup));