import * as React from 'react';
import classes from './App.module.css'
import Box from '@mui/material/Box';
import Login from './pages/login/login';
//import Notes from './pages/notes/notes';

function App() {
  return (
    <Box className={classes.parentApp}>
      {/* <Notes/> */}
      <Login/>
    </Box>
  );
}

export default App;
