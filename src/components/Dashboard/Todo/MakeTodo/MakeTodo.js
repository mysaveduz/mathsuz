import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default (props) => {
  const [text, writeText] = useState('');
  const [disabled, setDisabled] = useState(true);

  const addingTodo = (event) => {
    const inputText = event.target.value
    writeText(inputText);
    if(inputText){
      setDisabled(false)
    } else {
      setDisabled(true);
    }
  }
  const addButtonHandler = () => {
    props.handleCloseButton(text)
    writeText('');
  }
  return (
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add todo to your Todo List!</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="todoName"
            label="Enter Todo"
            type="text"
            fullWidth
            onChange={addingTodo}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={addButtonHandler} color="primary" disabled={disabled}>
            Add-Todo
          </Button>
        </DialogActions>
      </Dialog>
  );
}
