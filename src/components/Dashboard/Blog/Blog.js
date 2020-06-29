import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

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
