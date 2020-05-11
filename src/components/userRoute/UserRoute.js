import React from 'react';
import { Route, Redirect } from 'react-router-dom'

export default ({component: Component, authenticated, redirect, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authenticated
        ? <Component {...props} />
        : <Redirect to={{pathname: `${redirect}`}} />}
    />
  )
}