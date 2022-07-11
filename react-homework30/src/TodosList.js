import React, { Component } from 'react';
import './TodosList.css';
export default class TodosList extends Component {
    render() {
        return (
            <ol className='task-list'>
                {this.props.list.map((todo) => (
                    <li className={todo.isDone ? 'task-item done' : 'task-item'}
                        key={todo.id}
                        onClick={() => this.props.onToggle(todo)}
                    >
                        {todo.name}
                        <span
                            className='delete-btn'
                            onClick={(e) => {
                            e.stopPropagation();
                            this.props.onRemove(todo.id)}}>
                            ✘
                        </span>
                    </li>
                    
                ))}
            </ol>
        );
    }
}