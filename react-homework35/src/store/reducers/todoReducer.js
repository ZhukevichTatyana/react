
import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO
    
  } from '../actions/todoActions';
  const INITIAL_VALUE ={
  
    todos: [
       {
        id: 0,
        text: 'Consider using Redux',
        completed: true,
      },
       {
         id: 1,
         text: 'Keep all state in a single tree',
         completed: false
       }
     ]
  }
  let maxId=2;
  export default function todoReduser(state = INITIAL_VALUE, action) {
    
    switch (action.type) {
    
      case ADD_TODO:
        return {...state, 
          todos: [
            ...state.todos,
            {
              id: maxId++,
              text: action.text,
              completed: false,
             
            }
          ]
        };
      case TOGGLE_TODO:
        return { ...state, 
         todos: state.todos.map((todo, index) => {
            if (todo.id === action.index) {
            return {...todo, 
             completed: !todo.completed
        }
      }
      return todo
    })
  }

  
  case REMOVE_TODO:
    const newTodos = state.todos.filter((todo,index) => todo.id !== action.index);
    console.log(newTodos);
  return { ...state, 
    todos: newTodos
  }
      default:
        return state
    }
  }

