import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import lazyWithPreload from './shared/utils/preload';
const Signup = React.lazy(() => import('./pages/auth/signUp/signup'));
const Login = React.lazy(() => import('./pages/auth/login/login'));
const Notes = React.lazy(() => import('./pages/nav/navigation'));
const AllNotes = lazyWithPreload(() => import('./pages/nav/notes/notes'));
const Label = lazyWithPreload(() => import('./pages/nav/label/label'));
const Archive = lazyWithPreload(() => import('./pages/nav/archive/archive'));
const Trash = lazyWithPreload(() => import('./pages/nav/trash/trash'));

function App() {
  return (
      <React.Suspense fallback={<CircularProgress />}>
        <Router>
          <Routes>
            <Route path={'/'} element={<Navigate to='/login' replace/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Signup/>}/>
            <Route path="/notes/*" element={<Notes data={{AllNotes, Label, Archive, Trash}}/>}>
              <Route path={''} element={<Navigate to='all' replace/>}/>
              <Route path="all" element={<AllNotes />} />
              <Route path="label" element={<Label />} />
              <Route path="archive" element={<Archive />} />
              <Route path="trash" element={<Trash />} />
            </Route>
          </Routes>
        </Router>
      </React.Suspense>
  );
}

export default App;
