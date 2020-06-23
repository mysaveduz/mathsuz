import React from 'react';
import { Paper, Typography } from '@material-ui/core';

function Footer(){
  return(
    <Paper component='footer' square style={{height: '100px', backgroundImage: 'linear-gradient( 45deg, rgb(16, 8, 89), rgb(8, 4, 47))', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
       <Typography color='secondary'>
        &copy; Copyright {new Date().getFullYear()} by OlimovS.
       </Typography>
    </Paper>
  );
}

export default Footer;
