import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Examples from './Examples/Examples.js';
import Example from './Example/Example.js';

function Blog(props) {

   let { path } = useRouteMatch();
   return(
   <>
   <Switch>
    <Route exact path={`${path}`} component={Examples}/>
    <Route path={`${path}/:id`} component={Example}/>
   </Switch>
  </>
  );
}

export default Blog;
