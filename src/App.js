import React from 'react'

import { Provider } from 'react-redux'

import configureStore from './redux/configureStore'
import Routes from './Routes'
import './styles/app.css'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
