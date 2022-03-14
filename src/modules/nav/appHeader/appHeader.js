//import * as React from 'react';
import { Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Typography from '@mui/material/Typography';

export default function AppHeader (props) {
    return(
      <AppBar position="fixed" open={props.open} color="transparent" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 , borderTop:0}} elevation={0} variant="outlined">
        <Toolbar>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{width: '100%'}}>
            <Stack direction={'row'} alignItems={'center'}>
              <IconButton
                //color="inherit"
                aria-label="open drawer"
                onClick={props.handleDrawerToggle}
                edge="start"
                sx={{
                  marginRight: 5,
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div" color={'text.primary'}>
                Notes
              </Typography>
            </Stack>
            <Stack direction={'row'} alignItems={'center'}>
              <IconButton sx={{ ml: 1 }} onClick={props.colorMode.toggleColorMode} color="inherit">
                <DarkModeOutlinedIcon/>
              </IconButton>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    )
  }