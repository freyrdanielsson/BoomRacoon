import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';

import './Matching.scss';
import Match from '../../components/match/Match';
import MatchDetails from '../../components/matchDetails/MatchDetails';

import MatchPopup from '../../components/matchPopup/MatchPopup';

function Matching(props) {
    const { profile } = props
    const [users, setUsers] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const firebase = useFirebase();

    useEffect(() => {
        const fetchUsers = async () => {
            setLoadingUsers(true)
            firebase.firestore().collection('users')
                .where('category', '==', profile.category)
                .get().then((snapshot) => {
                    snapshot.forEach((doc) => {
                        if (doc.id === firebase.auth().currentUser.uid) return; // me
                        if (profile.matchings.includes(doc.id)) return; // seen and said yes
                        // if (profile.misMatchings.includes(doc.id)) return // seen and said nah

                        setUsers(u => {
                            return [...u, { data: doc.data(), id: doc.id }]
                        });
                    });
                }).catch(error => {
                    console.log("Error getting users: ", error);
                }).finally(() => {
                    setLoadingUsers(false);
                })
        }

        if (profile.isLoaded) {
            fetchUsers();
        }
        console.log(profile.isLoaded, profile.category, firebase, profile.matchings);

    }, [profile.isLoaded, profile.category, firebase, profile.matchings]) // Careful using firebase as a dependency

    const denyUser = () => {
        if (!profile.misMatchings.includes(users[0].id)) {
            firebase.updateProfile({
                misMatchings: [...profile.misMatchings, users[0].id]
            });
        }

        setUsers(users.splice(1, users.length));
    }

    const acceptUser = () => {
        const myId = firebase.auth().currentUser.uid;
        const user = users[0]

        // tell myself I have accepted the user
        firebase.updateProfile({
            matchings: [...profile.matchings, user.id]
        });

        // Check if user has accepted me
        if (user.data.matchings.includes(myId)) {
            // Launch popup
            setShowPopup(true);

            // create conversation
            return firebase.firestore().collection("conversations").doc().set({
                messages: [],
                user_uid_one: myId,
                user_uid_two: user.id
            }).catch(error => {
                console.error("Error writing new conversetion: ", error);
            });
        }
        setUsers(users.splice(1, users.length));
    }

    const matchChat = () => {
        setUsers(users.splice(1, users.length));
        props.history.push("/chat");
    }

    const keepSwiping = () => {
        setUsers(users.splice(1, users.length));
    }

    if (showPopup) {
        return (
            <React.Fragment>
                <MatchPopup profile={profile} user={users[0].data} matchChat={matchChat} keepSwiping={keepSwiping} />
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            {users[0] && !showPopup
                && <Match user={users[0].data} acceptUser={acceptUser} denyUser={denyUser} />
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