import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faTimes, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import "react-responsive-carousel/lib/styles/carousel.min.css";
// http://react-responsive-carousel.js.org/storybook/?path=/story/01-basic--base
import { Carousel } from 'react-responsive-carousel';
import './OwnProfile.scss';

export function OwnProfile(props) {
    const { setEditMode, profile, logout } = props;
    console.log(profile);

    const mockPics = [
        { url: require('../../assets/images/boxing-boy.jpg') },
        { url: require('../../assets/images/tennis-boy.jpg') },
    ]

    return (
        <div className='profile'>
            <div className="profile-image-container">
                <Carousel showArrows={false} showThumbs={false}>
                    {mockPics.map((pic) => {
                        return (
                            <div key={pic}>
                                <Button variant="contained" className="set-first" disabled><FontAwesomeIcon icon={faUserAlt} className="edit-icon" /></Button>
                                <Button variant="contained" className="remove-pic"><FontAwesomeIcon icon={faTimes} className="remove-icon" /></Button>
                                <img src={pic.url} className="match-image" alt=""></img>
                            </div>
                        )
                    })}
                </Carousel>
            </div>

            <div className="profile-container">
                <div className="profile-info">
                    <div className="profile-flex-1">
                        <h2>{`${profile.name}, ${profile.age}`}</h2>
                    </div>
                    <div className="profile-flex-2">
                        <Button variant="contained" className="edit-profile-button" onClick={() => setEditMode(true)}><FontAwesomeIcon icon={faEdit} className="edit-icon" /></Button>
                    </div>
                </div>
                <div className="match-details-description">
                    <p>{profile.description}</p>
                </div>
                <div className="categories-container">
                    <h4>CATEGORIES</h4>
                    <Button variant="contained" className="shared-interest">BOXING</Button>
                    <Button variant="contained" className="shared-interest">BASKETBALL</Button>
                    <Button variant="contained" className="shared-interest">TENNIS</Button>
                    <Button variant="contained" className="add-interest">&nbsp;<FontAwesomeIcon icon={faPlus} className="add-icon" />&nbsp;</Button>
                </div>
                <div className="logout">
                    <Button className="logout__button" onClick={logout}>Logout</Button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(OwnProfile));