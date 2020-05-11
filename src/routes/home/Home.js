import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { withRouter } from 'react-router-dom';
import { firestoreConnect, isLoaded, isEmpty, useFirebase } from 'react-redux-firebase';


import './Home.scss';

export function Home(props) {
    // Where does the category prop come from? See line 34 and 41!
    const { categories } = props;


    // If you need firebase function such as firebase.storage(...)
    const firebase = useFirebase();

    // Need to be authenticated else error
    async function getPic() {
        const pic = firebase.storage().ref().child('test/doggydogg.jpg').getDownloadURL();
        console.log(pic);
    }
    getPic();


    // Show message while categories are loading
    if (!isLoaded(categories)) {
        return <div>Loading...</div>
    }

    // Show message if there are no categories
    if (isEmpty(categories)) {
        return <div>List Is Empty</div>
    }

    return (
        <div className='home'>
            {JSON.stringify(categories, null, 2)}
        </div>
    );
}

// Connecting firestore state to component props
const mapStateToProps = (state) => {
    return {
        categories: state.firestore.data.categories,
        auth: state.firebase.auth,
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

export default withRouter(enhance(Home));