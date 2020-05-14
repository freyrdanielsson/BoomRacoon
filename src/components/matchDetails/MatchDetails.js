import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './MatchDetails.scss';

export function MatchDetails(props) {
    const { user, profile } = props;

    useEffect(() => {
        props.updateHeader(true);
        return () => props.updateHeader(false);
    });

    // http://react-responsive-carousel.js.org/storybook/?path=/story/01-basic--base

    const myInterests = profile.interests;

    let pictures = user.pics.map((picture, index) => {
        return <div key={picture.url} className="picture-container"><img src={picture.url} className="match-image" alt={"Picture-" + (index + 1)}></img></div>
    })

    let interests = user.interests.map((interest) => {
        return <Button key={interest} variant="contained" className={myInterests.interests.includes(interest) ? "shared-interest" : "unshared-interest"}>{interest}</Button>
    })

    return (
        <div className='match-details'>
            <div className="match-image-container">
                <Carousel showArrows={false} showThumbs={false}>
                    {pictures}
                </Carousel>
            </div>
            <div className="match-details-container">
                <div className="match-info-flex">
                    <div className="match-details-flex-1">
                        <h2>{user.name + ", " + user.age}</h2>
                    </div>
                    <div className="match-details-flex-2">

                    </div>
                </div>
                <div className="match-details-description">
                    <p>{user.description}</p>
                </div>
                <div className="categories-container">
                    <h4>Category: {user.category.toUpperCase()}</h4>
                    {interests}
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