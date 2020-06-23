import React from 'react';

import Header from './components/Main/Header/Header.js';
import Whymaths from './components/Main/Whymaths/Whymaths.js';
import Whyus from './components/Main/Whyus/Whyus.js';
import Login from './components/Main/Login/Login.js';
import Footer from './components/Main/Footer/Footer.js';
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
