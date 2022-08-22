import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import waitersReducer from './reducers/waitersReducer';
import menuReducer from './reducers/menuReducer';
import checkReducer from './reducers/checkReducer';

const rootReducer = combineReducers({
    waiters: waitersReducer,
    menu: menuReducer,
    check: checkReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        createLogger({
            collapsed: true,
        }),
    ),
);

export default store;
