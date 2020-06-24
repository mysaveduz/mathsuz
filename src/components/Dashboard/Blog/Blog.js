import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Paper, Typography, CardContent, CardActions, Grid, Link, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Spinner from './Spinner/Spinner.js'
import  posts from '../../../fakeData.js';

const useStyles = makeStyles( theme => ({
  paper: {
    backgroundColor: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    width: 360,
    // minWidth: 325,
    margin: 10,
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



function Blog() {
  const classes = useStyles();
  // const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

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
   setTimeout(() => {
     setLoading(false);
   }, 1000);

   function Showerror(){
     return <Typography variant='subtitle1' color='error'>ERROR: {error.message ? error.message : 'Something went wrong.'}</Typography>
   }
   function Posts(){
     return(
     <>
     <Typography variant='h4' gutterBottom>Postlar:</Typography>

     <Paper component='section' elevation={0} className={classes.paper}>
      {posts.map(post => (
        <Card key={post.id} className={classes.card}>
         <CardContent>
           <Typography variant='h5' gutterBottom noWrap>
             {post.name}
           </Typography>
           <Grid container>


             <Grid item xs={3}>
             <Typography className={classes.bold}>
               Theme:
             </Typography>
             </Grid>

             <Grid item xs={9}>
             <Typography noWrap>
               {post.source}
             </Typography>
             </Grid>

             <Grid item xs={3}>
             <Typography className={classes.bold}>
               Date:
             </Typography>
             </Grid>

             <Grid item xs={9}>
             <Typography noWrap>
               {post.date}
             </Typography>
             </Grid>

             <Grid item xs={3}>
             <Typography variant='body1' className={classes.bold} color='textPrimary' component='p'>
                Keys:
             </Typography>
             </Grid>

             <Grid item xs={9}>
             <Typography variant='body1' noWrap component='p'>
                {post.content}
             </Typography>
             </Grid>

             <Grid item xs={3}>
             <Typography className={classes.bold}>
               Teacher:
             </Typography>
             </Grid>

             <Grid item xs={9}>
               <Typography noWrap>
                 {post.author.name}{' '}{post.author.school}
               </Typography>
               <Typography noWrap>
                 {post.author.location}
               </Typography>
             </Grid>

           </Grid>
         </CardContent>
         <CardActions className={classes.cardActions}>
         <Typography>
             <Link href="#">
             Postga o'tish
            </Link>
         </Typography>
         </CardActions>
        </Card>
      ))}
    </Paper>
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
