import React from 'react';

import Header from './components/Header/Header.js';
import Whymaths from './components/Whymaths/Whymaths.js';
import Whyus from './components/Whyus/Whyus.js';
import Login from './components/Login/Login.js';
import Footer from './components/Footer/Footer.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
     <>
     <BrowserRouter>
       <Route path='/dashboard' component={Dashboard} />
       <Route path='/' exact render={() => (
         <>
           <CssBaseline />
           <Header />
           <Whymaths />
           <Whyus />
           <Login />
           <Footer />
         </>
       )}/>
     </BrowserRouter>
     </>
  );
}

export default App;

// <div style={{height: '100vh'}}>
// </div>
