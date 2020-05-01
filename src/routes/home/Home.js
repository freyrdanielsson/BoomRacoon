import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Home.scss';

import firebase from '../../firebase';

export function Home(props) {

    async function getCategories() {
        const categories = await firebase.firestore().collection('categories').get()
        return categories.docs.map(doc => {
            console.log(doc.data());
            doc.data();
        });
    }

    async function getPic() {
        const pic = firebase.storage().ref().child('test/doggydogg.jpg').getDownloadURL();
        console.log(pic);
    }

    getCategories();
    getPic();


    

    return (
        <div className='home'>
            Woho!
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(Home));