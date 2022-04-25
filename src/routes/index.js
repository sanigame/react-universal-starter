import React from 'react'

import { Routes, Route } from 'react-router-dom'

import routes from './routes'

const renderRoutes = (routeList) => {
  return routeList.map((route, i) => (
    <Route key={i} path={route.path} element={route.element} exact />
  ))
}

const AppRoutes = () => {
  return <Routes>{renderRoutes(routes)}</Routes>
}

export default AppRoutes
