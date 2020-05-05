import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, TextField, Link, Typography, Container } from '@material-ui/core';
import './Details.scss';
import MatchDetails from '../../components/matchDetails/MatchDetails';

export function Details(props) {

    return (
        <Fragment>
            <MatchDetails />
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(Details));