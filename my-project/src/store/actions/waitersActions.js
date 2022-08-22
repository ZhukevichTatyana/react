import { updateUser as apiUpdateUser, getUserList, getList} from '../../api';
import { removeUser as apiRemoveUser  } from '../../api';
import { createUser as apiCreateUser  } from '../../api';
import { createAction } from '../../utils';

export const USERS_SET_LOADING = 'USERS_SET_LOADING';
export const setLoading = createAction(USERS_SET_LOADING);

export const USERS_UPDATE_USER = 'USERS_UPDATE_USER';
export const updateUser = createAction(USERS_UPDATE_USER);

export const USERS_REMOVE_USER = 'USERS_REMOVE_USER';
export const removeUser = createAction(USERS_REMOVE_USER);

// export const USERS_EDIT_USER = 'USERS_EDIT_USER';
// export const editUser = createAction(USERS_EDIT_USER);

export const USERS_CREATE_USER = 'USERS_CREATE_USER';
export const createUser = createAction(USERS_CREATE_USER);

 export const USERS_SET_LIST = 'USERS_SET_LIST';
 export const setUserList = createAction(USERS_SET_LIST);

export const fetchList = () => (dispatch, getState) => {
    dispatch(setLoading(true));
    getUserList()
        .then((data) => dispatch(setUserList(data)))
        .finally(() => dispatch(setLoading(false)));
};
export const fetchListUrl = (URL) => (dispatch, getState) => {
  dispatch(setLoading(true));
  getList(URL)
      .then((data) => dispatch(setUserList(data)))
      .finally(() => dispatch(setLoading(false)));
};
// export function fetchList() { 
//   return (dispatch, getState) =>{
//     getTodoList()
//         .then((data) => dispatch(setTodoList(data)))
//         .finally(() => dispatch(setLoading(false)));
//   };
//   }
  


// export const editUser = (item) => (dispatch, getState) => {

//      };

 export const deleteUser = (id) => (dispatch, getState) => {
 
   dispatch(setLoading(true));
  apiRemoveUser(id)
       .then((data) => dispatch(removeUser(id)))
      .finally(() => dispatch(setLoading(false)));
 };

export const addUser = (newForm) => (dispatch) => {
    
  dispatch(setLoading(true));
  apiCreateUser(newForm)
      .then((data) => dispatch(createUser(data)))
      .finally(() => dispatch(setLoading(false)));
   
};
