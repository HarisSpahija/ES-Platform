import { createTheme } from '@mui/material/styles'

const theme = (prefersDarkMode: boolean) => {
  const commonColors = {
    light: '#FFFFFF',
    dark: '#1F1514',
  }

  return createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
      primary: {
        light: 'green',
        main: '#F47D20',
        dark: 'pink',
        contrastText: prefersDarkMode ? commonColors.light : commonColors.dark,
      },
      secondary: {
        light: 'yellow',
        main: '#e82c5f',
        dark: 'blue',
        contrastText: prefersDarkMode ? commonColors.light : commonColors.dark,
      },
      background: {
        default: prefersDarkMode ? commonColors.dark : commonColors.light,
        paper: prefersDarkMode ? commonColors.dark : commonColors.light,
      },
    },
  })
}

export { theme }
