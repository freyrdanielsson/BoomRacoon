import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faTimes, faUserAlt } from '@fortawesome/free-solid-svg-icons'
// http://react-responsive-carousel.js.org/storybook/?path=/story/01-basic--base
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './OwnProfile.scss';

export default function OwnProfile(props) {
    const { setEditMode, profile, logout, firebase } = props;

    const [loadingImg, setLoadingImg] = useState(false);


    const uploadFile = (file) => {
        setLoadingImg(true);

        // To make a unique name for the image. Use uid instead of name.
        const fileName = file.lastModified + file.name;
        const filePath = firebase.auth().currentUser.uid + '/' + fileName;
        console.log(filePath);

        return firebase.storage().ref(filePath).put(file).then((snapshot) => {
            return snapshot.ref.getDownloadURL().then((url) => {
                firebase.updateProfile({
                    pics: [...profile.pics, {
                        url: url,
                        order: 1
                    }]
                });
            });
        }).catch(error => {
            console.error('There was an error uploading a file to Cloud Storage:', error);
        }).finally(() => {
            setLoadingImg(false);
        })
    }

    const handleFileSelect = (e) => {
        e.preventDefault();
        const file = e.target.files[0];

        // Check if the file is an image.
        if (!file.type.match('image.*')) {
            // todo: Show error message
            return;
        }
        uploadFile(file);
    }

    const handleAddClick = (e) => {
        e.preventDefault();
        const mediaCaptureElement = document.getElementById('mediaCapture');
        mediaCaptureElement.click();
    }

    return (
        <div className='profile'>
            <input className="profile__hidden" id="mediaCapture" type="file" accept="image/*" capture="camera" onChange={(e) => handleFileSelect(e)} />

            {loadingImg
                && <div>
                    <p>Uploading image...</p>
                </div>
            }

            {!loadingImg
                && <Carousel showArrows={false} showThumbs={false}>
                    {profile.isLoaded && [0, 1, 2].map((i) => {
                        return (
                            <div className="profile__image-container" key={i}>
                                {profile.pics[i]
                                    && <React.Fragment>
                                        <Button variant="contained" className="set-first" disabled><FontAwesomeIcon icon={faUserAlt} className="edit-icon" /></Button>
                                        <Button variant="contained" className="remove-pic"><FontAwesomeIcon icon={faTimes} className="remove-icon" /></Button>
                                    </React.Fragment>
                                }
                                {profile.pics[i]
                                    ? <img src={profile.pics[i].url} className="profile__image" alt=""></img>
                                    : <div className="profile__image profile__image--add" onClick={(e) => handleAddClick(e, i)}>+</div>
                                }
                            </div>
                        )
                    })}
                </Carousel>
            }

            <div className="profile-container">
                <div className="profile-info">
                    <div className="profile-flex-1">
                        <h2>{`${profile.name || ''}, ${profile.age || ''}`}</h2>
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
                <div className="profile__logout">
                    <Button className="profile__logout__button" onClick={logout}>Logout</Button>
                </div>
            </div>
        </div>
    );
}
