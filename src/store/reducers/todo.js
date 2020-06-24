import * as actionTypes from '../actions/actionTypes.js';

const createTodo = (text) => ({
   checked: false,
   text: text,
   id: `${text},${new Date()},${Math.random()}`
})

const initialState = [

];

const appStarted = (state, action) => {
   const tasks = localStorage.getItem('savedList');

   if(tasks){
     return JSON.parse(tasks);
   }  else {
     return state;
   }
}


const todoAdded = (state, action) => {
    const todo = createTodo(action.text);
    const copyTodos = [...state];
    copyTodos.push(todo);
    localStorage.setItem('savedList', JSON.stringify(copyTodos));
    return copyTodos;
}

const checkboxTodo = (state, action) => {
     const copyTodos = [...state];
     const index = copyTodos.findIndex(obj => obj.id === action.id);
     copyTodos[index].checked = !state[index].checked;
     localStorage.setItem('savedList', JSON.stringify(copyTodos));
     return copyTodos;
}

const deleteTodo = (state, action) => {
    var copyTodos = [...state];
    copyTodos = copyTodos.filter(obj => obj.id !== action.id);
    localStorage.setItem('savedList', JSON.stringify(copyTodos));
    return copyTodos;
}


const reducer = ( state = initialState, action) =>{
    switch (action.type) {
      case actionTypes.ADDED_TODO: return todoAdded(state, action);
      case actionTypes.CHECKBOX_TODO: return checkboxTodo(state, action);
      case actionTypes.DELETE_TODO: return deleteTodo(state, action);
      case actionTypes.APP_STARTED: return appStarted(state, action);
      default: return state;
    }
}
 export default reducer;
