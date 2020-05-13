import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Paper } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import './Match.scss';
import MatchPopup from '../matchPopup/MatchPopup';
import { logOutUser } from '../../actions/auth';

export function Match(props) {

    // The paper tag and everything between should be a list of those objects that's generated when fetching people to match with

    return (
        <div className='match'>
            
            <Paper elevation={5} className="card-holder-match" >
                <div className="match-image-container">
                    <img src={require('../../assets/images/tennis-woman.jpg')} className="match-image" alt=""></img>
                </div>
                <div className="match-info-container">
                    <div className="match-info-flex">
                        <div className="match-info-flex-1">
                            <h2>Carolina</h2>
                        </div>
                        <div className="match-info-flex-2">
                            <h2>6</h2>
                        </div>
                    </div>
                    <div className="match-info-description">
                        <p>Looking for a tennis buddy, intermediate or higher!</p>
                    </div>
                </div>
            </Paper>
            <div className="decide-buttons-container">
                <Button variant="contained" className="no-button"><FontAwesomeIcon icon={faTimes} className="x-icon" onClick={() => props.logOutUser()} /></Button>
                <Button variant="contained" className="yes-button"><FontAwesomeIcon icon={faCheck} className="check-icon" /></Button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOutUser: () => dispatch(logOutUser())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Match));