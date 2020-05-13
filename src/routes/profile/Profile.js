import React, { Fragment, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { firestoreConnect, useFirebase } from 'react-redux-firebase';

import { setFunction } from '../../actions/header';

import OwnProfile from '../../components/ownProfile/OwnProfile';
import ProfileForm from '../../components/profileForm/ProfileForm';
import CategoryList from '../../components/categoryList/CategoryList';

import './Profile.scss';

export function Profile(props) {
    const [editMode, setEditMode] = useState(false);
    const [categoryMode, setCategoryMode] = useState(false);
    const firebase = useFirebase();

    const handleProfileUpdate = (payload) => {
        firebase.updateProfile(payload);
        setEditMode(false);
    }

    const handleLogout = () => {
        firebase.logout();
    }

    const updateHeader = (active) => {
        const f = () => {
            setCategoryMode(false);
        }
        props.dispatch(setFunction(f, active));
    }

    const changeCategory = (category) => {
        firebase.updateProfile({
            category,
            interests: [],
        });
    }

    const changeInterest = (interests) => {
        firebase.updateProfile({
            interests,
        });
    }

    if (editMode) {
        return <ProfileForm profile={props.profile} handleUpdate={handleProfileUpdate} setEditMode={setEditMode} />
    }

    if (categoryMode && props.categories) {
        return <CategoryList categories={props.categories} profile={props.profile} updateHeader={updateHeader} changeCategory={changeCategory} changeInterest={changeInterest} />
    }

    return (
        <Fragment>
            <OwnProfile profile={props.profile} setEditMode={setEditMode} setCategoryMode={() => setCategoryMode(true)} logout={handleLogout} firebase={firebase} />
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        categories: state.firestore.data.categories,
        profile: state.firebase.profile,
    }
}

// Adding automatic listeners to 'categories' collection
const enhance = compose(
    firestoreConnect((props) => [
        { collection: 'categories' }
    ]),
    connect(mapStateToProps)
)

export default withRouter(enhance(Profile));