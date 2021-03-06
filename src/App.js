import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Switch, withRouter } from 'react-router-dom';

// import components
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import UserRoute from './components/userRoute/UserRoute';
import IosPrompt from './components/iosPrompt/IosPrompt';

// import routes
import Login from './routes/login/Login';
import Signup from './routes/signup/Signup';
import Matching from './routes/matching/Matching';
import Details from './routes/details/Details';
import Profile from './routes/profile/Profile';
import Messages from './routes/messages/Messages';
import Conversation from './routes/conversation/Conversation';

import { checkForIOS } from './utils/check';

import './App.scss';


function App(props) {
  // likely want to access authentication status here as well
  const { location, auth } = props;
  const [isClosed, setIsClosed] = useState(false);

  const isAuthenticated = !auth.isEmpty;

  if (!auth.isLoaded) {
    // Here would be a good idea to show splash screen with  logo
    // while waiting for user tobe authenticated
    return <></>
  }
  
  const promptIos = checkForIOS();
  

  return (
    <Fragment>
      {/* This is a nice package for controlling the title of the page */}
      <Helmet defaultTitle='Boom Racoon' titleTemplate='%s - Boom Racoon' />
      {promptIos && !isClosed && <IosPrompt setIsClosed={setIsClosed}/>}
      {isAuthenticated && <Header />}
      <main className='app'>
        <Switch location={location}>
          {/* Home will never be accessable from navigation. For now I use it for debugging */}
          <UserRoute exact path='/' authenticated={isAuthenticated} redirect='/login' component={Profile} />
          <UserRoute exact path='/matching' authenticated={isAuthenticated} redirect='/login' component={Matching} />
          <UserRoute exact path='/matching/:id' authenticated={isAuthenticated} redirect='/login' component={Details} />
          {/* chat/:id needs a bit more protection on client? OR on the firebase console we can  make rules! */}
          <UserRoute exact path='/chat' authenticated={isAuthenticated} redirect='/login' component={Messages} />
          <UserRoute exact path='/chat/:id' authenticated={isAuthenticated} redirect='/login' component={Conversation} />
          <UserRoute exact path='/login' authenticated={!isAuthenticated} redirect='/' component={Login} />
          <UserRoute exact path='/signup' authenticated={!isAuthenticated} redirect='/' component={Signup} />
        </Switch>
      </main>
      {isAuthenticated && <Navigation history={props.history} location={location} />}
    </Fragment >

  )
}

// Connecting firestore state to component props
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default withRouter(connect(mapStateToProps)(App));