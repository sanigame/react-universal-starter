import React from 'react'

import { createRoot, hydrateRoot } from 'react-dom/client'

import App from './App'
import configureStore from './redux/configureStore'
import reportWebVitals from './reportWebVitals'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const initialState = global.window && global.window.__INITIAL_STATE__
const store = configureStore(initialState)
const container = document.getElementById('root')

console.log('initialState', initialState)

const ssrRender = () => {
  console.log('ssrRender')
  hydrateRoot(container, <App store={store} />)
}

const clientRender = () => {
  console.log('clientRender')
  const root = createRoot(container)
  root.render(<App store={store} />)
}

module.hot ? clientRender() : ssrRender()

serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
