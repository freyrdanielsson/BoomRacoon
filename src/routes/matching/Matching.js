import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';
import { Button } from '@material-ui/core';

import { setFunction } from '../../actions/header';

import Match from '../../components/match/Match';
import MatchDetails from '../../components/matchDetails/MatchDetails';
import MatchPopup from '../../components/matchPopup/MatchPopup';

import './Matching.scss';

function Matching(props) {
    const { profile, listeners } = props
    const [users, setUsers] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [showDetail, setShowDetail] = useState(false);

    const firebase = useFirebase();

    useEffect(() => {
        const fetchUsers = async () => {
            setLoadingUsers(true);
            const tmp = [];

            firebase.firestore().collection('users')
                .where('category', '==', profile.category)
                .get().then((snapshot) => {
                    snapshot.forEach((doc) => {
                        if (doc.id === firebase.auth().currentUser.uid) return; // me
                        if (profile.matchings.includes(doc.id)) return; // seen and said yes
                        if (profile.misMatchings.includes(doc.id)) return // seen and said nah

                        tmp.push({ data: doc.data(), id: doc.id })
                    });
                }).catch(error => {
                    console.error("Error getting users: ", error);
                }).finally(() => {
                    setUsers(tmp);
                    setLoadingUsers(false);
                })
        }

        if (profile.isLoaded) {
            fetchUsers();
        }

    }, [firebase, profile]) // Careful using firebase as a dependency

    const denyUser = () => {
        firebase.updateProfile({
            misMatchings: [...profile.misMatchings, users[0].id]
        });
    }

    const acceptUser = () => {
        const myId = firebase.auth().currentUser.uid;
        const user = users[0];

        // tell myself I have accepted the user

        // Check if user has accepted me
        if (user.data.matchings.includes(myId)) {
            // Launch popup
            setShowPopup(true);
        } else {
            firebase.updateProfile({
                matchings: [...profile.matchings, user.id]
            });
        }
    }

    const createConvo = (myId, userId) => {
        return firebase.firestore().collection("conversations").doc().set({
            messages: [],
            user_uid_one: myId,
            user_uid_two: userId
        }).catch(error => {
            console.error("Error writing new conversetion: ", error);
        })
    }

    const matchChat = () => {
        const myId = firebase.auth().currentUser.uid;
        const user = users[0];

        setShowPopup(false);

        createConvo(myId, user.id).then(() => {
            props.history.push("/chat");
        }).then(() => {
            firebase.updateProfile({
                matchings: [...profile.matchings, user.id]
            })
        })
    }

    const keepSwiping = () => {
        const myId = firebase.auth().currentUser.uid;
        const user = users[0];

        setShowPopup(false);

        createConvo(myId, user.id).then(() => {
            firebase.updateProfile({
                matchings: [...profile.matchings, user.id]
            })
        })
    }

    const updateHeader = (active) => {
        const f = () => {
            setShowDetail(false);
        }
        props.dispatch(setFunction(f, active));
    }

    const tryAgain = () => {
        firebase.updateProfile({
            misMatchings: []
        })
    }

    if (showPopup && !loadingUsers) {
        return (
            <React.Fragment>
                <MatchPopup profile={profile} user={users[0].data} matchChat={matchChat} keepSwiping={keepSwiping} />
            </React.Fragment>
        );
    }

    if (showDetail) {
        return (
            <React.Fragment>
                <MatchDetails user={users[0].data} profile={profile} updateHeader={updateHeader} />
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            {users[0] && !showPopup
                && <Match onDetail={() => setShowDetail(true)} user={users[0].data} acceptUser={acceptUser} denyUser={denyUser} />
            }

            {users.length === 0 && !loadingUsers
                && <div className="matching__empty">
                    <p className="matching__empty-text">Oops! Looks like you ran out of contenders.</p>
                    <p className="matching__empty-text">Head down to your profile and change the category to explore more users.</p>
                    <p className="matching__empty-text">Or just lower your standards and:</p>
                    <Button onClick={tryAgain} variant="contained" className="matching__empty-button">Try again!</Button>            </div>
            }

            {profile.category
                ? <div className="matching__category">
                    <p>Showing users with category:</p>
                    <p className="matching__category-active">{profile.category}</p>
                </div>
                : <div className="matching__category">
                    <p>To see other users, head down to your profile and select a category </p>
                </div>
            }
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
    }
}

export default withRouter(connect(mapStateToProps)(Matching));