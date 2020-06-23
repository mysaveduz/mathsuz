import React from 'react';
import{ AppBar,Button, CssBaseline, Drawer, Hidden, IconButton, ListItemText, MenuItem, ListItemIcon, MenuList, Toolbar, Typography, Divider }from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';

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
    // [theme.breakpoints.up('sm')]: {
    //
     // zIndex: theme.zIndex.drawer + 1,
    // },
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
    maxWidth: 920,
    margin: '0 auto',
    textAlign: 'center',
  },
  menuitem: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
  }
}));

function Dashboard(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  var number = 3;
  const drawer = (
    <MenuList style={{outline: 'none'}}>
       <MenuItem onClick={handleDrawerToggle} component={Link} to={'/'} className={classes.menuitem}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={'Home'} />
       </MenuItem>
       <Divider />
       <MenuItem onClick={handleDrawerToggle} component={Link} to={'/dashboard/profile'} className={classes.menuitem}>
          <ListItemIcon>
            <Badge badgeContent={number} color="secondary">
                <FormatListNumberedIcon />
              </Badge>
          </ListItemIcon>
          <ListItemText primary={'Profile'} />
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
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
      <main className={classes.content}>

       <h1> HEllo</h1>


      </main>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     todos: state
//   }
// }

export default Dashboard;
