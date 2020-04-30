import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Home.scss';

export function Home(props) {

    return (
        <div className='home'>
            Woho!
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(Home));