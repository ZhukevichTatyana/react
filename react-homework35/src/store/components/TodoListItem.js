import { useDispatch } from 'react-redux';
import { toggleTodo,removeTodo } from '../actions/todoActions';
import React from 'react';

export default function TodoListItem ({item}) {    
    const dispatch = useDispatch();   
        return (
            <div
                className={
                    'task-item u-full-width' +
                    (item.completed ? ' done' : '') }
               
                    onClick={onItemClick}
                    key={item.id}
            >
                {item.text}
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

dispatch(removeTodo(item.id)); 

    };
}