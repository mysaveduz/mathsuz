import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Typography, Paper } from '@material-ui/core';

import mathImg from "../../images/welcome/maths.jpg";

const useStyles = makeStyles(theme => ({
  whyUs: {
    paddingTop: '70px',
    paddingBottom: '70px',
    backgroundImage: 'linear-gradient(135deg, rgb(255, 36, 148), rgb(117, 55, 233))',
  },
  root: {
    maxWidth: 345,
    marginBottom: theme.spacing(3),
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  benefits: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    width: '90%',
    margin: '20px auto 0px',
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.whyUs} square elevation={0}>
      <Typography align='center' gutterBottom variant='h3' component='h3'>
        Nega Biz ?
      </Typography>
      <div className={classes.benefits}>
      <Card square elevation={0} className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={mathImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      <Card square elevation={0} className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={mathImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      <Card square elevation={0} className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={mathImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      </div>
    </Paper>

  );
}
