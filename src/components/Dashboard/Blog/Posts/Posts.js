import React from 'react';
import { Card, Paper, Typography, CardContent, CardActions, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useRouteMatch } from 'react-router-dom';

import  posts from '../../../../fakeData.js';

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



export default function Posts(){
  const classes = useStyles();
  const { url } = useRouteMatch();

  return(
  <>
    <Typography variant='h4' gutterBottom>Postlar:</Typography>

    <Paper elevation={0} className={classes.paper}>
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
            <Link to={`${url}/${post.id}`}>
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
