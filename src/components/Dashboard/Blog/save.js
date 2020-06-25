import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Paper, Typography, CardContent, CardActions, Grid, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch, Link,useRouteMatch } from 'react-router-dom';

import Spinner from './Spinner/Spinner.js'
import  posts from '../../../fakeData.js';

const useStyles = makeStyles( theme => ({
  paper: {
    backgroundColor: 'inherit',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: 7,
  },
  card: {
    // maxWidth: 360,
    // minWidth: 300,
    // margin: 10,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '40px',
  },
  bold: {
    fontWeight: 'bold',
  },
}));



function Blog(props) {
  const classes = useStyles();
  // const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});



   function Showerror(){
     return <Typography variant='subtitle1' color='error'>ERROR: {error.message ? error.message : 'Something went wrong.'}</Typography>
   }
   function Posts(){
     let { path, url } = useRouteMatch();
     return(
     <>
     <Typography variant='h4' gutterBottom>Postlar:</Typography>

     <Switch>
      <Route exact path={`${path}`} render={() => (

      )}/>
      <Route path={`${path}/:id`} render={() => (

      )}/>
     </Switch>


    </>
    );
   }

   if(loading){
     return <Spinner />;
   }
   // if(error){
   //   return <Showerror />
   // }
   else {
     return <Posts />;
   }
}

export default Blog;


// <Card  className={classes.card} elevation={3} key={post.id}>
// <CardHeader
//     avatar={
//       <Avatar aria-label="recipe" style={{backgroundColor: 'rgba(16, 72, 217, 0.83)'}}>
//         R
//       </Avatar>
//     }
//     title={post.fullText.title}
//     subheader={post.config.date}
//   />
//   <CardContent>
//     <Typography variant='body2' color='textSecondary' gutterBottom style={{marginTop: 'auto'}}>
//       Author: {post.fullText.author}
//     </Typography>
//     <Typography variant='body1'>
//     {post.fullText.content}
//     </Typography>
//
//
//   </CardContent>
// </Card>





// const fetchData = async () => {
//   try {
//     setLoading(true);
//     const result = await axios(`https://my-blog-uz.firebaseio.com/blog-posts.json`);
//     const responseObj = result.data;
//     const posts = Object.keys(responseObj).map(id => {
//       return { id: id,  fullText: responseObj[id].post, config: responseObj[id].config }
//     });
//
//     setPosts(posts);
//
//   } catch(err) {
//     setError(err);
//   }
//   setLoading(false);
//  };
//
// useEffect(() => {
//   fetchData();
// }, []);




// const onGofullpost = (id) => {
//   props.history.push({pathname: '/dashboard/blog/' + id});
//   console.log(props.history);
// }
// <Route path={props.match.url+ '/:id'} component={Fullpost} />
