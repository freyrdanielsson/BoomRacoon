import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom';

// import components

// import routes
import Home from './routes/home/Home';

import './App.scss';


function App(props) {
  // likely want to access authentication status here as well
  const { location } = props;

  return (
    <Fragment>
      {/* This is a nice package for controlling the title of the page */}
      <Helmet defaultTitle='BinGo' titleTemplate='%s - BinGo' />

      <main className='app'>
        <Switch location={location}>
          <Route exact path='/' component={Home} />
        </Switch>
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