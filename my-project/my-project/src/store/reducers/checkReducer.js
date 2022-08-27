import {
    CREATE_DISHES,
    CREATE_TABLE,
    CREATE_WAITER,


    
  } from '../actions/checkActions';
const initialValue = {
   table: 0,
   waiter: '',
   price: 0,
   dishes: [],

  };
  function createDishes(state, payload) {
   
    return { ...state, dishes: payload };
    
  };

  function createTable(state, payload) {
    
    return { ...state, table: payload };
  };

  function createWaiter(state, payload) {
    
    return { ...state, waiter: payload };
  };

 export default function checkReducer(state = initialValue, { type, payload }) {
    switch (type) {
                 case CREATE_DISHES:
                     return createDishes(state, payload);
                 case CREATE_TABLE:
                     return createTable(state, payload);
                 case CREATE_WAITER:
                      return createWaiter(state, payload);
                default:
                    return state;   
                
 };
}
  

  
     