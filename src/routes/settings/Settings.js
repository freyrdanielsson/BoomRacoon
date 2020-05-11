import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Settings.scss';
import SettingsList from '../../components/settingsList/SettingsList';

export function Settings(props) {

    return (
        <Fragment>
            <SettingsList />
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(Settings));