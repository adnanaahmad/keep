import * as React from 'react';
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppHeader from './appHeader/appHeader';
import AppSideNav from './appSideNav/appSideNav';
import {toggleBorder} from '../../shared/styles/debugging-border';
import { api } from '../../shared/utils/interceptor';
import axios from "axios";
import {apiRoute, httpMethod} from '../../shared/constants/constants';
import {catchAsync} from '../../shared/utils/catchAsync';
import { useSelector, useDispatch } from 'react-redux';
import { setLabelsData } from './slice/labelSlice';
import { setNotesData } from './slice/noteSlice';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const isBorder = toggleBorder;

function NavigationPage(props) {
  const useEffect = React.useEffect;
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const colorMode = React.useContext(ColorModeContext);
  const token = useSelector((state) => state.userSlice.token);
  const handleDrawerToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };
  useEffect(() => {
    let getNotesAndLabels = catchAsync(async () => {
      const data = await axios.all([
        api({
          method: httpMethod.get,
          url: apiRoute.notes,
          headers: {Authorization: `Bearer ${token}`}
        }),
        api({
          method: httpMethod.get,
          url: apiRoute.labels,
          headers: {Authorization: `Bearer ${token}`}
        })
      ]);
      const notes = data[0].data.data.notes;
      const labels = data[1].data.data.labels;
      dispatch(setNotesData({notes}));
      dispatch(setLabelsData({labels}));
      //console.log(notes, labels);
    });
    getNotesAndLabels();
    // preload modules
    console.log('navigation');
    props.data['AllNotes'].preload();
    props.data['Archive'].preload();
    props.data['Label'].preload();
    props.data['Trash'].preload();
  }, [props.data, token, dispatch]);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Header */}
      <AppHeader colorMode={colorMode} handleDrawerToggle={handleDrawerToggle} open={open}/>
      {/* Side Nav Bar */}
      <AppSideNav open={open} />
      {/* Router Outlet */}
      <Box component="main" sx={{ flexGrow: 1, padding: '24px 24px 0 24px', marginTop: '64px', border: isBorder ? '1px solid red' : 'none', width:'100%', height: 'fit-content'}}>
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