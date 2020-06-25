import React from 'react';
import { Paper, Grid, Typography, Card, CardActions, CardContent, Button  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useRouteMatch, Link } from 'react-router-dom';

import examples from '../../../../fakeData.js';

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


function Examples(){

  const classes = useStyles();
  const { url } = useRouteMatch();
  return(
  <>
    <Typography variant='h4' gutterBottom>Misollar:</Typography>
    <Paper className={classes.paper} square elevation={0}>
      {examples.map(exp => (
        <Card key={exp.id} className={classes.card}>
         <CardContent>
           <Typography variant='h5' gutterBottom noWrap>
             {exp.name}
           </Typography>
           <Grid container>
             <Grid item xs={3}>
             <Typography variant='body1' className={classes.bold} color='textPrimary' component='p'>
                class:
             </Typography>
             </Grid>

             <Grid item xs={9}>
             <Typography variant='body1' component='p'>
                {exp.class} sinf
             </Typography>
             </Grid>

             <Grid item xs={3}>
             <Typography className={classes.bold}>
               source:
             </Typography>
             </Grid>

             <Grid item xs={9}>
             <Typography noWrap>
               {exp.source}
             </Typography>
             </Grid>

             <Grid item xs={3}>
             <Typography className={classes.bold}>
               teacher:
             </Typography>
             </Grid>

             <Grid item xs={9}>
               <Typography noWrap>
                 {exp.author.name}{' '}{exp.author.school}
               </Typography>
               <Typography noWrap>
                 {exp.author.location}
               </Typography>
             </Grid>

           </Grid>
         </CardContent>
         <CardActions className={classes.cardActions}>
          <Typography>
             <Link to={`${url}/${exp.id}`}>
             Misolga o'tish
            </Link>
          </Typography>
         </CardActions>
        </Card>
      ))}
    </Paper>
  </>
  );
}

export default Examples;
