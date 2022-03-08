import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
//import classes from './App.module.css'
import Login from './pages/login/login';
import Notes from './pages/notes/notes';
import Signup from './pages/signUp/signup';

function App() {
  const defaultRouteHanler = () => {
    return (
      <Redirect to='/login'/>
    )
  }
  return (
        <Router>
          <Switch>
            <Route exact path={'/'} render={defaultRouteHanler}/>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Signup/>
            </Route>
            <Route path="/notes">
              <Notes/>
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
