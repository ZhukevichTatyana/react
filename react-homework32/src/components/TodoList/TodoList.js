import './TodoList.css';

import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';

export default function TodoList({list, onToggle, onRemove}) {
    
        return (
            <div className="task-list u-full-width">
                {list.map((item) => (
                    <TodoListItem
                        key={item.id}
                        item={item}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        );    
}

