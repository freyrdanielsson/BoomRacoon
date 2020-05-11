import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import './SettingsList.scss';

export function SettingsList(props) {

    // Add or update category view

    return (
        <div className='settings'>
            <FormGroup className="settings-list">
                <div className="settings-flex">
                    <h3>Tilt mode</h3>
                    <Switch checked={false} color="primary" />
                </div>
                <div className="settings-flex">
                    <h3>Setting #2</h3>
                    <Switch checked={true} color="primary" />
                </div>
                <div className="settings-flex">
                    <h3>About</h3>
                </div>
            </FormGroup>
            <Button variant="contained" fullWidth className="log-out-button">Log out</Button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(SettingsList));