import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Matching.scss';
import Match from '../../components/match/Match';

export function Matching(props) {
    
    return (
        <Fragment>
            <Match />
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(Matching));