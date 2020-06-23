import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import grey  from '@material-ui/core/colors/grey';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import './Header.css';
import { Link } from 'react-scroll';

import welcomeImg from '../../images/welcome/galaxy.jpg';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  welcome: {
     height: '100vh',
     backgroundImage:  `linear-gradient(45deg, rgba(37, 37, 37, 0.17), rgba(0, 0, 0, 0.17)) , url(${welcomeImg}) `,
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     textAlign: 'center',
  },
}));

const whiteColor = createMuiTheme({
  palette: {
    primary: {
      main: grey[50],
    },
  },
})

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            MATHS
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.welcome}>
        <div>
        <ThemeProvider theme={whiteColor}>
          <Typography color='primary' gutterBottom variant='h2' component='h1'>
            Matematik olimpiada sari...
          </Typography>
          <Typography variant='h6' color='primary'>
            Bilim o'rgan, o'qi, olg'a!
          </Typography>
        </ThemeProvider>
        <Link className="arrow" to="whyMaths" smooth={true} duration={1000}>
                <span></span>
                <span></span>
                <span></span>
        </Link>
        </div>
      </div>
    </>
  );
}
