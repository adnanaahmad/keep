import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import lazyWithPreload from './shared/utils/preload';
const Signup = React.lazy(() => import('./modules/auth/signUp/signup'));
const Login = React.lazy(() => import('./modules/auth/login/login'));
const NotesDashboard = React.lazy(() => import('./modules/nav/navigation'));
const AllNotes = lazyWithPreload(() => import('./modules/nav/pages/all/all'));
const Label = lazyWithPreload(() => import('./modules/nav/pages/label/label'));
const Archive = lazyWithPreload(() => import('./modules/nav/pages/archive/archive'));
const Trash = lazyWithPreload(() => import('./modules/nav/pages/trash/trash'));

function App() {
  return (
      <React.Suspense fallback={<CircularProgress />}>
        <Router>
          <Routes>
            <Route path={'/'} element={<Navigate to='/login' replace/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Signup/>}/>
            <Route path="/notes/*" element={<NotesDashboard data={{AllNotes, Label, Archive, Trash}}/>}>
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
