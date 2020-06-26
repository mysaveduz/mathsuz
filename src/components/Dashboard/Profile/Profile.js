import React from 'react';
import { Typography, Paper, MenuIcon, Divider, MenuItem, MenuList, ListItemIcon,Menu, ListItemText } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import EventNoteIcon from '@material-ui/icons/EventNote';

import { useRouteMatch, Route, Switch } from 'react-router-dom';

import Saved from './Saved/Saved.js';
import Done from './Done/Done.js';
import Results from './Results/Results.js';

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: 'inherit',
  },
  header: {
    padding: '0 2%',
    display: 'flex',
    justifyContent: 'center',
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
   rootIcon: {
     height: '2em',
     width: '2em',
   },
}));

function Profile() {
  const { path, url } = useRouteMatch();
  console.log(useRouteMatch());
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
     setValue(newValue);
   };

   const setFalseToDrawer = () => {

   }

   const [anchorEl, setAnchorEl] = React.useState(null);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
     setAnchorEl(null);
   };

  return(
    <Paper className={classes.paper} square elevation={0}>
     <header className={classes.header}>

     <PersonIcon classes={{root: classes.rootIcon}} color='primary'/>



     <div>
       <IconButton  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon />
       </IconButton>
       <Menu
         id="simple-menu"
         anchorEl={anchorEl}
         keepMounted
         open={Boolean(anchorEl)}
         onClose={handleClose}
       >
         <MenuItem onClick={handleClose}>Profile</MenuItem>
         <MenuItem onClick={handleClose}>My account</MenuItem>
         <MenuItem onClick={handleClose}>Logout</MenuItem>
       </Menu>
     </div>

      </header>
      <Typography align='center'>
        example@mail.com
      </Typography>
      <Paper square elevation={0} style={{backgroundColor: 'inherit'}}>

           <MenuList style={{outline: 'none'}}>

              <MenuItem onClick={setFalseToDrawer} component={NavLink} to={`${url}/done`} className={classes.menuitem}>
                 <ListItemIcon>
                     <DoneIcon color='primary'/>
                 </ListItemIcon>
                 <ListItemText primary={'Bajarganlarim'} />
              </MenuItem>


              <MenuItem onClick={setFalseToDrawer} component={NavLink} to={`${url}/later-saved`} className={classes.menuitem}>
                 <ListItemIcon>
                     <WatchLaterIcon color='primary'/>
                 </ListItemIcon>
                 <ListItemText primary={'Keyinroqqa saqlanganlar'} />
              </MenuItem>



              <MenuItem onClick={setFalseToDrawer} component={NavLink} to={`${url}/results`} className={classes.menuitem}>
                 <ListItemIcon>
                     <EqualizerIcon color='primary'/>
                 </ListItemIcon>
                 <ListItemText primary={'Natijalar'} />
              </MenuItem>

              <Divider />
           </MenuList>
      <Switch>
        <Route path={`${path}/done`} component={Done}  />
        <Route path={`${path}/later-saved`} component={Saved}  />
        <Route path={`${path}/results`} component={Results}  />
      </Switch>
     <p>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     </p>
    </Paper>
    </Paper>
  );
}


export default Profile;


// <MenuItem onClick={setFalseToDrawer} component={NavLink} to={`${url}/competitions`} className={classes.menuitem}>
//    <ListItemIcon>
//        <EventNoteIcon color='primary'/>
//    </ListItemIcon>
//    <ListItemText primary={'Musobaqalar'} />
// </MenuItem>
