import red from '@mui/material/colors/red'
import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = (isDarkMode = false) => {
  return createTheme({
    palette: {
      type: isDarkMode ? 'light' : 'light',
      primary: {
        main: '#02ab55',
      },
      secondary: {
        main: '#ffc107',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
    },
  })
}

export default theme
