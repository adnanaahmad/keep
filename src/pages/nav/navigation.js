import * as React from 'react';
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppHeader from './appHeader/appHeader';
import AppSideNav from './appSideNav/appSideNav';
import { useNavigate } from 'react-router-dom';
import {toggleBorder} from '../../shared/styles/debugging-border';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const isBorder = toggleBorder;

function NavigationPage() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const colorMode = React.useContext(ColorModeContext);

  const handleDrawerToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };
  function routeTo(path) {
    navigate(path);
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Header */}
      <AppHeader colorMode={colorMode} handleDrawerToggle={handleDrawerToggle} open={open}/>
      {/* Side Nav Bar */}
      <AppSideNav open={open} routeTo={routeTo} />
      {/* Router Outlet */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '64px', border: isBorder ? '1px solid red' : 'none', maxWidth:'1024px', marginX: 'auto'}}>
        <Outlet/>
      </Box>
    </Box>
  );
}

export default function NavigationPageWrapper() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <NavigationPage />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}