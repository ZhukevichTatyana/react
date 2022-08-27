import {
    USERS_CREATE_USER,
    USERS_REMOVE_USER,
    USERS_SET_LIST,
    USERS_SET_LOADING,
    USERS_UPDATE_USER,
  } from '../actions/waitersActions';
  const initialValue = {
    isLoading: false,
    wlist: [],
  };
  
  function updateUser(state, updatedUser) {
    return {
        ...state,
        wlist: state.wlist.map((item) =>
            item.id !== updatedUser.id ? item : updatedUser,
        ),
    };
  }
  
  function removeUser(state, id) {
    return {
        ...state,
        wlist: state.wlist.filter((item) => item.id !== id),
    };
  }
  
  function createUser(state, payload) {
    
    return { ...state, wlist: [...state.wlist, payload] };
  }
  
  export default function waitersReducer(state = initialValue, { type, payload }) {
    console.log('reducer', type, payload);
  
    switch (type) {
        case USERS_UPDATE_USER:
            return updateUser(state, payload);
        case USERS_REMOVE_USER:
            return removeUser(state, payload);
        case USERS_CREATE_USER:
             return createUser(state, payload);
            
        case USERS_SET_LIST:
            return { ...state, wlist: payload };
        case USERS_SET_LOADING:
            return { ...state, isLoading: payload };
        default:
            return state;
    }
  }