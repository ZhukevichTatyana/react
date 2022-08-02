
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import todoReducer from './reducers/todoReducer';

const store = createStore(
    todoReducer,
    applyMiddleware(
        thunk,
        createLogger({
            collapsed: true,
        }),
    ),
);

export default store;


