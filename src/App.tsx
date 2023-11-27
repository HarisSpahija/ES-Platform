import {
  CssBaseline,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from '@mui/material'

import Navbar from './components/Navbar/Navbar'
import { theme } from './helpers/theme'
import { useMemo, useState } from 'react'

function App() {
  const [prefersDarkMode, setDarkMode] = useState(
    useMediaQuery('(prefers-color-scheme: dark)'),
  )

  const handleSettingDarkMode = (darkMode: boolean) => {
    setDarkMode(darkMode)
  }

  const preferredTheme = useMemo(
    () => theme(prefersDarkMode),
    [prefersDarkMode],
  )

  return (
    <>
      <ThemeProvider theme={preferredTheme}>
        <CssBaseline />
        <Navbar
          prefersDarkMode={prefersDarkMode}
          setDarkMode={handleSettingDarkMode}
        />
        <Typography variant='body1' sx={{ flexGrow: 1, paddingX: 2 }}>
          {prefersDarkMode ? 'Dark mode' : 'Light mode'}
        </Typography>
      </ThemeProvider>
    </>
  )
}

export default App
