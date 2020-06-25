import React from 'react';

import Dashboard from './components/Dashboard/Dashboard.js';
import Main from './components/Main/Main.js';
import Page404 from './components/Page404/Page404.js';
import CssBaseline from '@material-ui/core/CssBaseline';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


function App() {
  return (
     <>
     <CssBaseline />
     <Router>
        <Switch>
           <Route path='/dashboard' component={Dashboard} />
           <Route path='/' exact component={Main}/>
           <Route path='/404' component={Page404} />
           <Redirect to='/404' />
        </Switch>
     </Router>
     </>
  );
}

export default App;

// <div style={{height: '100vh'}}>
// </div>
