import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './MatchDetails.scss';

export function MatchDetails(props) {

    // http://react-responsive-carousel.js.org/storybook/?path=/story/01-basic--base

    const user = {
        name: "Ratman",
        age: 25,
        email: "ratman@ratman.com",
        category: "Sports",
        interests: ["Football", "Fighting"],
        description: "RATMAN YO",
        matchings: [],
        conversations: [],
        pics: [
            {
                order: 1, 
                path: "M7IZgd47H1ZHqe6fgdYSQpcPvWr1/1586779775764ratatuoille-cinemareversilia.jpeg",
                url: "https://firebasestorage.googleapis.com/v0/b/dm2518-project-matching.appspot.com/o/M7IZgd47H1ZHqe6fgdYSQpcPvWr1%2F1586779775764ratatuoille-cinemareversilia.jpeg?alt=media&token=0fd646d6-75be-4d58-aabb-20d008fcdb3f"
            },
            {
                order: 2, 
                path: "M7IZgd47H1ZHqe6fgdYSQpcPvWr1/1587672168261selena-gomez-pevitsa-portret-znamenitost.jpg",
                url: "https://firebasestorage.googleapis.com/v0/b/dm2518-project-matching.appspot.com/o/M7IZgd47H1ZHqe6fgdYSQpcPvWr1%2F1587672168261selena-gomez-pevitsa-portret-znamenitost.jpg?alt=media&token=0951319d-7a8c-4169-ad54-8e3d0d96a7c5"
            }
        ]
    }

    const myInterests = {
        interests: ["Football", "Tennis"]
    }

    let pictures = user.pics.map((picture, index) => {
        return <div key={picture.url} className="picture-container"><img src={picture.url} className="match-image" alt={"Picture-" + (index+1)}></img></div>
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