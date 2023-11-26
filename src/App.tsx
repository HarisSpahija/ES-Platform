import { Box, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'

import { theme } from './helpers/theme'
import { useMemo, useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import EnergyForm from './components/EnergyForm/EnergyForm'
import YourComponent from './components/EnergyForm/TestComponent'

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

        <Box sx={{ margin: 2, marginTop: 4 }}>
          <EnergyForm />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
