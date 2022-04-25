import React from 'react'

import { Switch, Route } from 'react-router-dom'

import routes from './routes'

const renderRoutes = (routeList) => {
  return routeList.map((route, i) => (
    <Route key={i} path={route.path} component={route.component} exact />
  ))
}

const AppRoutes = () => {
  return <Switch>{renderRoutes(routes)}</Switch>
}

export default AppRoutes
