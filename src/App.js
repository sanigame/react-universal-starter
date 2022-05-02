import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import configureStore from './redux/configureStore'
import AppRoutes from './routes/index'
import './styles/app.css'

const initialState = global.window && global.window.__INITIAL_STATE__
const store = configureStore(initialState)

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
