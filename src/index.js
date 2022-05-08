import React from 'react'

import { createRoot, hydrateRoot } from 'react-dom/client'

import App from './App'
import reportWebVitals from './reportWebVitals'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import 'typeface-roboto'

const container = document.getElementById('root')

const ssrRender = () => {
  hydrateRoot(container, <App />)
}

const clientRender = () => {
  const root = createRoot(container)
  root.render(<App />)
}

module.hot ? clientRender() : ssrRender()

serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
