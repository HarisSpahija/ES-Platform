import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Bolt } from '@mui/icons-material'
import { Avatar, MenuItem, Tooltip, Menu, Switch } from '@mui/material'
import { MouseEvent, useState } from 'react'

interface INavBarProps {
  setDarkMode: (darkMode: boolean) => void
  prefersDarkMode: boolean
}

const Navbar = (props: INavBarProps) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Bolt sx={{ mr: 1 }} />
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Energy Supplier B.V.
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Settings aanpassen'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt='User image of Haris Spahija'
                  src='https://avatars.githubusercontent.com/u/22589249?s=40'
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key='toggle-dark-mode'>
                <Typography textAlign='center'>Dark mode</Typography>
                <Switch
                  checked={props.prefersDarkMode}
                  onChange={() => props.setDarkMode(!props.prefersDarkMode)}
                />
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
