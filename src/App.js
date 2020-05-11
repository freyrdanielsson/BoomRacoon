import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase'

// import components
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import UserRoute from './components/userRoute/UserRoute';


// import routes
import Home from './routes/home/Home';
import Login from './routes/login/Login';
import Signup from './routes/signup/Signup';
import Matching from './routes/matching/Matching';
import Details from './routes/details/Details';
import Profile from './routes/profile/Profile';
import ProfileEdit from './routes/profileEdit/ProfileEdit';
import Categories from './routes/categories/Categories';
import CategoryUpdate from './routes/categoryUpdate/CategoryUpdate';
import Settings from './routes/settings/Settings';
import Messages from './routes/messages/Messages';
import Conversation from './routes/conversation/Conversation';


import './App.scss';


function App(props) {
  // likely want to access authentication status here as well
  const { location, auth } = props;
  const isAuthenticated = !auth.isEmpty;

  return (
    <Fragment>
      {/* This is a nice package for controlling the title of the page */}
      <Helmet defaultTitle='BinGo' titleTemplate='%s - BinGo' />

      <main className='app'>
        {isAuthenticated && <Header />}
        <Switch location={location}>
          <UserRoute exact path='/' authenticated={isAuthenticated} redirect='/login' component={Home} />
          <UserRoute exact path='/matching' authenticated={isAuthenticated} redirect='/login' component={Login} />
          <UserRoute exact path='/chat' authenticated={isAuthenticated} redirect='/login' component={Messages} />
          <UserRoute exact path='/profile' authenticated={isAuthenticated} redirect='/login' component={Home} />
          <UserRoute exact path='/login' authenticated={!isAuthenticated} redirect='/profile' component={Login} />
          <UserRoute exact path='/signup' authenticated={!isAuthenticated} redirect='/profile' component={Signup} />
        </Switch>
        {isAuthenticated && <Navigation history={props.history} />}
      </main>
    </Fragment >

  )
}

// Connecting firestore state to component props
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

export default withRouter(connect(mapStateToProps)(App));