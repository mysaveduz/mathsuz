import React, { useEffect } from 'react';
import{ AppBar,Button, Paper, CssBaseline, Drawer, Hidden, IconButton, ListItemText, MenuItem, ListItemIcon, MenuList, Toolbar, Typography, Divider }from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import PersonIcon from '@material-ui/icons/Person';
import BookIcon from '@material-ui/icons/Book';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import CreateIcon from '@material-ui/icons/Create';

import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';

import Todo from './Todo/Todo.js';
import Blog from './Blog/Blog.js';
import Profile from './Profile/Profile.js';
import Examples from './Examples/index.js';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
      zIndex: 100000,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  drawerPaper: {
    width: drawerWidth,
    paddingTop: theme.mixins.toolbar.minHeight + 13,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: theme.mixins.toolbar.minHeight + 40,
    backgroundColor: 'inherit',
  },
  menuitem: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
  },
}));




function Dashboard(props) {
  const appStarting = () => {
    props.onAppStarter();
  }
  useEffect(() => {
    appStarting();
  }, []);
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const setFalseToDrawer = () => {
    setMobileOpen(false);
  }

  var fun = (sum, obj) => {
     let n = obj.checked ? 0 : 1;
     return sum + n;
   }
  var number = props.todos.reduce(fun , 0);

  const drawer = (
    <MenuList style={{outline: 'none'}}>

       <MenuItem onClick={setFalseToDrawer} component={NavLink} to={'/dashboard/profile'} className={classes.menuitem}>
          <ListItemIcon>
              <PersonIcon color='primary'/>
          </ListItemIcon>
          <ListItemText primary={'Profile'} />
       </MenuItem>

       <Divider />

       <MenuItem onClick={setFalseToDrawer} component={NavLink} to={'/dashboard/maqola'} className={classes.menuitem}>
          <ListItemIcon>
              <BookIcon color='primary'/>
          </ListItemIcon>
          <ListItemText primary={'Maqolalar'} />
       </MenuItem>

       <MenuItem onClick={setFalseToDrawer} component={NavLink} to={'/dashboard/examples'} className={classes.menuitem}>
          <ListItemIcon>
              <ImportContactsIcon color='primary'/>
          </ListItemIcon>
          <ListItemText primary={'Examples'} />
       </MenuItem>

       <MenuItem onClick={setFalseToDrawer} component={NavLink} to={'/dashboard/competitions'} className={classes.menuitem}>
       <ListItemIcon>
       <EventNoteIcon color='primary'/>
       </ListItemIcon>
       <ListItemText primary={'Competitions'} />
       </MenuItem>

       <Divider />

       <MenuItem onClick={setFalseToDrawer} component={NavLink} to={'/dashboard/write'} className={classes.menuitem}>
       <ListItemIcon>
       <CreateIcon color='primary'/>
       </ListItemIcon>
       <ListItemText primary={'Write'} />
       </MenuItem>

       <Divider />

       <MenuItem onClick={setFalseToDrawer} component={NavLink} to={'/dashboard/todo'} className={classes.menuitem}>
          <ListItemIcon>
            <Badge badgeContent={number} color="secondary">
                <FormatListNumberedIcon color='primary'/>
              </Badge>
          </ListItemIcon>
          <ListItemText primary={'Todo'} />
       </MenuItem>

       </MenuList>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          <Button color='inherit' style={{marginLeft: 'auto'}}>
            <Link style={{textDecoration: 'none', color: 'inherit'}}  to='/'>
            Main page
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of NavLinks. */}
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
           >
            {drawer}
          </Drawer>
        </Hidden>

      </nav>
      <Paper elevation={0} component='main' className={classes.content}>

      <Switch>
        <Route path='/dashboard/maqola' component={Blog} />
        <Route exact path='/dashboard/todo' component={Todo} />
        <Route path='/dashboard/examples' component={Examples} />
        <Route path='/dashboard/profile' component={Profile} />
        <Route path='/dashboard/write' render={() => (<h1>Write</h1>)} />
        <Route path='/dashboard' render={() => (<h1>Dashboard</h1>)} />
      </Switch>

      </Paper>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAppStarter: () => dispatch(actions.appStarted())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
