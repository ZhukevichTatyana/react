import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/todoActions';
import React from 'react';

export default function TodoListItem ({item}) {    
    const dispatch = useDispatch();   
        return (
            <div
                className={
                    'task-item u-full-width' +
                    (item.isDone ? ' done' : '') }               
                    onClick={onItemClick}
                    key={item.id}
            >
                {item.title}
                <span className="delete-btn"
                 onClick={onDeleteItemClick}>
                    ✘
                </span>
            </div>
        );
    
    function onItemClick() {       
        dispatch(toggleTodo(item.id)); 
    };   

    function onDeleteItemClick(e) {
        e.stopPropagation();
        dispatch(deleteTodo(item.id)); 

    };
}