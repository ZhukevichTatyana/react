
import React from 'react';
import TodoListItem from './TodoListItem';

import { useSelector } from 'react-redux';
import todoSelector from '../selectors/todoSelector';
export default function TodoList() {
    const list = useSelector(todoSelector);
   
        return (
            <div className="task-list u-full-width">
                { list.map((item) => (                    
                    <TodoListItem
                        key={item.id}
                        item={item}                        
                    />                    
                ) 
                )}
            </div>
        );    
}