import React from 'react';

import clsx from 'clsx';
import { Paper, Typography,  Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import lamp from "../../../images/services/lamp.png";
import clock from "../../../images/services/clock.png";
import camera from "../../../images/services/camera.png";
import liquid from "../../../images/services/liquid.png";

const useStyles = makeStyles(theme => ({
   whySection: {
      minHeight: '60vh',
      paddingTop: '70px',
      paddingBottom: '70px',
      backgroundImage: 'linear-gradient(45deg, rgb(184, 11, 78), rgb(29, 37, 231))',
   },

  services: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    width: '90%',
    margin: '20px auto 0px',
  },
  service: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    textAlign: 'center',
    width: '230px',
    marginBottom: theme.spacing(3),
  },
  icon: {
    margin: '0px auto',
    width: '90px',
    height: '90px',
    borderRadius: '50%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(45deg, rgb(48, 176, 73), rgb(48, 116, 195))',
  },
}));


function App() {
  const classes = useStyles();

  return (
    <Paper id='whyMaths' square className={classes.whySection} component='section'>
      <Typography align='center' gutterBottom variant='h3' component='h3'>
        Nega Matematika ?
      </Typography>
      <div className={classes.services}>
          <Card className={classes.service} elevation={0}>
             <div className={clsx(classes.icon, classes.lamp)}>
               <img src={lamp} alt="Lamp" />
             </div>
             <CardContent>
               <Typography variant='h4' component='h4'>Pellentesque</Typography>
               <Typography variant='subtitle1'>Nulla vitae libero, a pharetra augue. Integer posuere erat a ante venenatis condimentum velit dapibus.</Typography>
             </CardContent>
          </Card>
          <Card className={classes.service} elevation={0}>
            <div className={clsx(classes.icon, classes.clock)}>
              <img src={clock} alt="Clock" />
            </div>
            <CardContent>
              <Typography variant='h4' component='h4'>Consectetur</Typography>
               <Typography variant='subtitle1'>Vestibulum id ligula porta euismod semper. Aenean lacinia bibendum nulla sed consectetur dui.</Typography>
             </CardContent>
          </Card>
          <Card className={classes.service} elevation={0}>
            <div className={clsx(classes.icon, classes.liquid)}>
              <img src={liquid} alt="liquid" />
            </div>
            <CardContent>
              <Typography variant='h4' component='h4'>Tristiquet</Typography>
               <Typography variant='subtitle1'>Fusce dapibus, cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo risus.</Typography>
             </CardContent>
          </Card>
          <Card className={classes.service} elevation={0}>
            <div className={clsx(classes.icon, classes.camera)}>
              <img src={camera} alt="camera" />
            </div>
            <CardContent>
              <Typography variant='h4' component='h4'>Fermentum</Typography>
               <Typography variant='subtitle1'>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum sagittis lacus mollis.</Typography>
             </CardContent>
          </Card>
      </div>
    </Paper>
  );
}

export default App;
