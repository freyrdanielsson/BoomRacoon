import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './ProfileEdit.scss';
import ProfileForm from '../../components/profileForm/ProfileForm';

export function ProfileEdit(props) {

    return (
        <Fragment>
            <ProfileForm />
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(ProfileEdit));