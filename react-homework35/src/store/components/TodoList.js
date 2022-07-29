
import React from 'react';
import { Provider } from 'react-redux';
import TodoListItem from './TodoListItem';
import store from '../../store';
import { useSelector } from 'react-redux';
import todoSelector from '../../selectors/todoSelector';
export default function TodoList() {
    const todos = useSelector(todoSelector);
   
        return (
            <div className="task-list u-full-width">
                { todos.map((item) => (
                    <Provider store={store}>
                    <TodoListItem
                        key={item.id}
                        item={item}
                        
                    />
                    </Provider>
                ) 
                )}
            </div>
        );    
}