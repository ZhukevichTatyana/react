import {
    USERS_CREATE_USER,    
    USERS_REMOVE_USER,
    USERS_SET_LIST,
    USERS_SET_LOADING,
    USERS_UPDATE_USER,
  } from '../actions/menuActions';
  const initialValue = {
    isLoading: false,
    dlist: [],
  };
  function updateUser(state, updatedUser) {
    return {
        ...state,
        dlist: state.dlist.map((item) =>
            item.id !== updatedUser.id ? item : updatedUser,
        ),
    };
  }
  
  function removeUser(state, id) {
    return {
        ...state,
        dlist: state.dlist.filter((item) => item.id !== id),
    };
  }
  
  function createUser(state, payload) {
    
    return { ...state, dlist: [...state.dlist, payload] };
  }
  
  export default function menuReducer(state = initialValue, { type, payload }) {
    console.log('reducer', type, payload);
  
    switch (type) {
        case USERS_UPDATE_USER:
            return updateUser(state, payload);
        case USERS_REMOVE_USER:
            return removeUser(state, payload);
        case USERS_CREATE_USER:
             return createUser(state, payload);
            
        case USERS_SET_LIST:
            return { ...state, dlist: payload };
        case USERS_SET_LOADING:
            return { ...state, isLoading: payload };
        default:
            return state;
    }
  }