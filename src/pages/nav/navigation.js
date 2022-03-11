import * as React from 'react';
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppHeader from './appHeader/appHeader';
import AppSideNav from './appSideNav/appSideNav';
import {toggleBorder} from '../../shared/styles/debugging-border';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const isBorder = toggleBorder;

function NavigationPage(props) {
  const useEffect = React.useEffect;
  const [open, setOpen] = React.useState(false);
  const colorMode = React.useContext(ColorModeContext);

  const handleDrawerToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };
  useEffect(() => {
    // preload modules
    console.log('navigation');
    props.data['AllNotes'].preload();
    props.data['Archive'].preload();
    props.data['Label'].preload();
    props.data['Trash'].preload();
  }, [props.data]);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Header */}
      <AppHeader colorMode={colorMode} handleDrawerToggle={handleDrawerToggle} open={open}/>
      {/* Side Nav Bar */}
      <AppSideNav open={open} />
      {/* Router Outlet */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '64px', border: isBorder ? '1px solid red' : 'none', maxWidth:'1024px', marginX: 'auto'}}>
        <Outlet/>
      </Box>
    </Box>
  );
}

export default function NavigationPageWrapper(props) {
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
        <NavigationPage data={props.data} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}