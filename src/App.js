import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
const Signup = React.lazy(() => import('./pages/auth/signUp/signup'));
const Login = React.lazy(() => import('./pages/auth/login/login'));
const Notes = React.lazy(() => import('./pages/nav/navigation'));

function App() {
  const defaultRouteHanler = () => {
    return (
      <Redirect to='/login'/>
    )
  }
  return (
      <React.Suspense fallback={<CircularProgress />}>
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
      </React.Suspense>
  );
}

export default App;
