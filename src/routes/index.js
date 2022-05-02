import React, { Suspense } from 'react'

import { Routes, Route } from 'react-router-dom'

import routes from './routes'

const renderRoutes = (routeList) => {
  return routeList.map((route, i) => (
    <Route key={i} path={route.path} element={route.element} exact />
  ))
}

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>{renderRoutes(routes)}</Routes>
    </Suspense>
  )
}

export default AppRoutes
