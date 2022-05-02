import React from 'react'

import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import createEmotionCache from './createEmotionCache'
import configureStore from './redux/configureStore'
import AppRoutes from './routes/index'
import './styles/app.css'
import theme from './theme/theme'

const cache = createEmotionCache()
const initialState = global.window && global.window.__INITIAL_STATE__
const store = configureStore(initialState)
const isDarkMode = false

const App = () => {
  return (
    <Provider store={store}>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme(isDarkMode)}>
          <CssBaseline />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  )
}

export default App
