
import { updateTodo as apiUpdateTodo, getTodoList } from '../../api';
import { removeTodo as apiRemoveTodo  } from '../../api';
import { createTodo as apiCreateTodo  } from '../../api';
import { createAction } from '../../utils';

export const TODOS_SET_LOADING = 'TODOS_SET_LOADING';
export const setLoading = createAction(TODOS_SET_LOADING);

export const TODOS_UPDATE_TODO = 'TODOS_UPDATE_TODO';
export const updateTodo = createAction(TODOS_UPDATE_TODO);

export const TODOS_REMOVE_TODO = 'TODOS_REMOVE_TODO';
export const removeTodo = createAction(TODOS_REMOVE_TODO);

export const TODOS_CREATE_TODO = 'TODOS_CREATE_TODO';
export const createTodo = createAction(TODOS_CREATE_TODO);

export const TODOS_SET_LIST = 'TODOS_SET_LIST';
export const setTodoList = createAction(TODOS_SET_LIST);

export const fetchList = () => (dispatch, getState) => {
    dispatch(setLoading(true));
    getTodoList()
        .then((data) => dispatch(setTodoList(data)))
        .finally(() => dispatch(setLoading(false)));
};
// export function fetchList() { 
//   return (dispatch, getState) =>{
//     getTodoList()
//         .then((data) => dispatch(setTodoList(data)))
//         .finally(() => dispatch(setLoading(false)));
//   };
//   }
  

export const toggleTodo = (id) => (dispatch, getState) => {
    const { list } = getState();

    const item = list.find((item) => item.id === id);
    const updatedItem = { ...item, isDone: !item.isDone };

    dispatch(setLoading(true));
    apiUpdateTodo(updatedItem)
        .then((data) => dispatch(updateTodo(data)))
        .finally(() => dispatch(setLoading(false)));
};

export const deleteTodo = (id) => (dispatch, getState) => {
 
  dispatch(setLoading(true));
  apiRemoveTodo(id)
      .then((data) => dispatch(removeTodo(id)))
      .finally(() => dispatch(setLoading(false)));
};

export const addTodo = (newTodo) => (dispatch, getState) => {
  
  dispatch(setLoading(true));
  apiCreateTodo(newTodo)
      .then((data) => dispatch(createTodo(newTodo)))
      .finally(() => dispatch(setLoading(false)));
};



  
  
