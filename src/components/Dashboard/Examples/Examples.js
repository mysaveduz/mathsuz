import React from 'react';
import { Paper, Grid, Typography, Card, CardActions, CardContent, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import examples from '../../../fakeData.js';

const useStyles = makeStyles({
  paper: {
    backgroundColor: 'inherit',
  },
  card: {
    maxWidth: 400,
    minWidth: 325,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '40px',
  },
  bold: {
    fontWeight: 'bold',
  },
});


function Examples(){

  const classes = useStyles();

  return(
    <Paper className={classes.paper} square elevation={0}>
      <Typography variant='h4' gutterBottom>Misollar:</Typography>
      <Grid container spacing={3}>
      {examples.map(exp => (
        <Grid  key={exp.id} item xs>
        <Card className={classes.card}>
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
             <Link href="#">
             Misolga o'tish
            </Link>
         </Typography>
         </CardActions>
        </Card>
        </Grid>
      ))}
      </Grid>
    </Paper>
  );
}

export default Examples;
