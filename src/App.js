import React from 'react'

import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'

import AppRoutes from './routes/index'
import './styles/app.css'

const App = ({ store, location }) => {
  return (
    <Provider store={store}>
      {location ? (
        <StaticRouter location={location} context={{}}>
          <AppRoutes store={store} />
        </StaticRouter>
      ) : (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      )}
    </Provider>
  )
}

App.propTypes = {
  location: PropTypes.any,
  store: PropTypes.any,
}

export default App
