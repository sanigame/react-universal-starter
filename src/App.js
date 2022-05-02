import React from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import configureStore from './redux/configureStore'
import AppRoutes from './routes/index'
import './styles/app.css'
import theme from './theme/theme'

const initialState = global.window && global.window.__INITIAL_STATE__
const store = configureStore(initialState)
const isDarkMode = false

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme(isDarkMode)}>
        <CssBaseline />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
