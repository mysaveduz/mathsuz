import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { Route, Switch, Link, useRouteMatch, useParams } from 'react-router-dom';

import Spinner from './Spinner/Spinner.js'
import Posts from './Posts/Posts.js';
import Post from './Post/Post.js';

function Blog(props) {

   let { path } = useRouteMatch();
   return(
   <>
   <Switch>
    <Route exact path={`${path}`} component={Posts}/>
    <Route path={`${path}/:id`} component={Post}/>
   </Switch>
  </>
  );
}

export default Blog;
