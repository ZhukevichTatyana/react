import './TodoListItem.css';
import React from 'react';

export default function TodoListItem ({item, onToggle, onRemove}) {    
    
        return (
            <div
                className={
                    'task-item u-full-width' +
                    (item.isDone ? ' done' : '')
                }
                onClick={onItemClick}
            >
                {item.title}
                <span className="delete-btn" onClick={onDeleteItemClick}>
                    ✘
                </span>
            </div>
        );
    
    function onItemClick() {
        onToggle(item.id);
    };   

    function onDeleteItemClick(e) {
        e.stopPropagation();

        onRemove(item.id);
    };
}
