import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Paper } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './MatchDetails.scss';

export function MatchDetails(props) {

    // http://react-responsive-carousel.js.org/storybook/?path=/story/01-basic--base

    return (
        <div className='match-details'>
            <div className="match-image-container">
                <Carousel showArrows={false} showThumbs={false}>
                    <div>
                        <img src={require('../../assets/images/tennis-woman.jpg')} className="match-image" alt=""></img>
                    </div>
                    <div>
                        <img src={require('../../assets/images/woman-doggy.jpg')} className="match-image" alt=""></img>
                    </div>
                </Carousel>
            </div>
            <div className="match-details-container">
                <div className="match-info-flex">
                    <div className="match-details-flex-1">
                        <h2>Carolina, 26</h2>
                    </div>
                    <div className="match-details-flex-2">
                        <h3>Stockholm</h3>
                    </div>
                </div>
                <div className="match-details-description">
                    <p>Looking for a tennis buddy, intermediate or higher!</p>
                    {/*<p>Skill level: <b>6</b> | Your skill level: <b>4</b></p>*/}
                </div>
                <div className="categories-container">
                    <h4>CATEGORIES</h4>
                    <Button variant="contained" className="shared-interest">TENNIS</Button>
                    <Button variant="contained" className="unshared-interest">DOGS</Button>
                    <Button variant="contained" className="unshared-interest">SINGING</Button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(MatchDetails));