import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Paper } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import './Match.scss';
import { logOutUser } from '../../actions/auth';

export function Match(props) {
    const { user, denyUser, acceptUser, onDetail } = props

    const userImage = user.pics[0] ? user.pics[0].url : require('../../assets/images/tennis-woman.jpg');

    // The paper tag and everything between should be a list of those objects that's generated when fetching people to match with

    return (
        <div className='match'>

            <Paper elevation={5} className="card-holder-match" >
                <div className="match-image-container" onClick={onDetail}>
                    <img src={userImage} className="match-image" alt=""></img>
                </div>
                <div className="match-info-container">
                    <div className="match-info-flex">
                        <div className="match-info-flex-1">
                            <h2>{user.name}</h2>
                        </div>
                        <div className="match-info-flex-2">
                            <h2>{user.age}</h2>
                        </div>
                    </div>
                    <div className="match-info-description">
                        <p>{user.description}</p>
                    </div>
                </div>
            </Paper>
            <div className="decide-buttons-container">
                <Button onClick={denyUser} variant="contained" className="no-button"><FontAwesomeIcon icon={faTimes} className="x-icon" /></Button>
                <Button onClick={acceptUser} variant="contained" className="yes-button"><FontAwesomeIcon icon={faCheck} className="check-icon" /></Button>
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