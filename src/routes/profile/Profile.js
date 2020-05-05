import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Profile.scss';
import OwnProfile from '../../components/ownProfile/OwnProfile';

export function Profile(props) {

    return (
        <Fragment>
            <OwnProfile />
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(Profile));