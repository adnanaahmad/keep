// import GridLayout from 'react-grid-layout';
// import '../../../node_modules/react-grid-layout/css/styles.css';
// import '../../../node_modules/react-resizable/css/styles.css';
// import './notes.css'
// function Notes () {
//     // layout is an array of objects, see the demo for more complete usage
//     const layout = [
//       {i: 'a', x: 0, y: 0, w: 2, h: 2, minW: 2, maxW: 2},
//       {i: 'b', x: 2, y: 0, w: 2, h: 2, minW: 2, maxW: 2},
//       {i: 'c', x: 4, y: 0, w: 2, h: 2, minW: 2, maxW: 2}
//     ];
//     return (
//       <GridLayout className="layout" layout={layout} cols={6} rowHeight={30} width={1200}>
//         <div key="a">a</div>
//         <div key="b">b</div>
//         <div key="c">c</div>
//       </GridLayout>
//     )
// }
// export default Notes;
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppHeader from './appHeader/appHeader';
import AppSideNav from './appSideNav/appSideNav';
import {toggleBorder} from '../../shared/styles/debugging-border';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const isBorder = toggleBorder;

function NavigationPage() {
  const [open, setOpen] = React.useState(false);
  const colorMode = React.useContext(ColorModeContext);

  const handleDrawerToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppHeader colorMode={colorMode} handleDrawerToggle={handleDrawerToggle} open={open}/>
      <AppSideNav open={open} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '64px', border: isBorder ? '1px solid red' : 'none', maxWidth:'1024px', marginX: 'auto'}}>
        
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
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