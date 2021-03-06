import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index.js';
import MakeTodo from './MakeTodo/MakeTodo.js';

const useStyles = makeStyles(theme => ({
  todo: {
    maxWidth: 920,
    margin: '0 auto',
  },
  firstSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  thead: {
    fontWeight: 'bolder'
  },
  tcell: {
    padding: theme.spacing(1),
  },
}));


function Todo (props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    // const appStarting = () => {
    //   props.onAppStarter();
    // }
    // useEffect(() => {
    //   appStarting();
    // }, []);
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleCloseButton = (text) => {
      setOpen(false);
      props.onTodoAdd(text);
    }

    const checkboxHandler = (id) => {
      props.onCheckTodo(id);
    }

    const deleteTodoHandler = (id) => {
      props.onDeleteTodo(id)
    }
    return (
      <section className={classes.todo}>
          <div className={classes.firstSection}>
          <Typography variant='h4'>
           My Todo List
          </Typography>
          <Button variant="contained" color="secondary" onClick={handleClickOpen}>
            ADD TODO
          </Button>
          </div>
          <MakeTodo
              open={open}
              handleClose={handleClose}
              handleCloseButton={handleCloseButton}
              />
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.thead}>Done</TableCell>
                  <TableCell className={classes.thead}>Todo List Items</TableCell>
                  <TableCell className={classes.thead}>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

              {props.todos.map(todo => (
                    <TableRow key={`${todo.id}`}>
                        <TableCell className={classes.tcell}>
                            <Checkbox
                                onChange={() => checkboxHandler(todo.id)}
                                checked={todo.checked}
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                              />
                        </TableCell>
                        <TableCell className={classes.tcell}>{todo.text}</TableCell>
                        <TableCell className={classes.tcell}>
                           <IconButton onClick={() => deleteTodoHandler(todo.id)}>
                              <DeleteIcon />
                           </IconButton>
                        </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
      </section>
    );
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
     onTodoAdd: (text) => dispatch(actions.todoAdded(text)),
     onCheckTodo: (id) => dispatch(actions.checkboxTodo(id)),
     onDeleteTodo: (id) => dispatch(actions.deleteTodo(id)),
     onAppStarter: () => dispatch(actions.appStarted())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
