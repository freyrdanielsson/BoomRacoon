import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom';

// import components
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';

// import routes
import Home from './routes/home/Home';
import Login from './routes/login/Login';
import Matching from './routes/matching/Matching';
import Details from './routes/details/Details';
import Profile from './routes/profile/Profile';
import ProfileEdit from './routes/profileEdit/ProfileEdit';
import Categories from './routes/categories/Categories';
import CategoryUpdate from './routes/categoryUpdate/CategoryUpdate';
import Settings from './routes/settings/Settings';
import Messages from './routes/messages/Messages';


import './App.scss';


function App(props) {
  // likely want to access authentication status here as well
  const { location } = props;

  return (
    <Fragment>
      {/* This is a nice package for controlling the title of the page */}
      <Helmet defaultTitle='BinGo' titleTemplate='%s - BinGo' />

      <main className='app'>
        <Header />
          <Switch location={location}>
            <Route exact path='/' component={Messages} />
          </Switch>
        <Navigation />
      </main>
    </Fragment>

  )
}

// this is an example if we have a reducer called auth that has
// a state variable isAuthenticated. Then this is how we connect it
// to this components props
const mapStateToProps = (state) => {
  return {
    /* isAuthenticated: state.auth.isAuthenticated, */
  }
}

export default withRouter(connect(mapStateToProps)(App));