import './App.css';

import React, { Component } from 'react';

import TodoForm from './TodoForm';
import TodosList from './TodosList';

export default class App extends Component {
    state = {
        list: [
            {
                id: 1,
                name: 'Alex',
               isDone: 'true',
            },
            {
                id: 2,
                name: 'Bob',
                isDone: 'false',
            },
            {
                id: 3,
                name: 'John',
                isDone: 'true',
            },
            {
                id: 4,
                name: 'Charly',
                isDone: 'false',
            },
        ],
    };

    render() {
        return (
            <>
                <TodosList
                    list={this.state.list}
                    onRemove={this.removeTodo}
                    onToggle={this.toggleTodo}
                />
                <TodoForm onSave={this.createTodo} />
            </>
        );
    }

    removeTodo = (id) => {
        this.setState({
            list: this.state.list.filter((todo) => todo.id !== id),
        });
    };

    toggleTodo = (todo) => {
        todo.isDone = !todo.isDone;

        this.updateTodo(todo);

    }

    updateTodo = (updateTodo) => {
        this.setState({
            list: this.state.list.map((todo) => todo.id !== updateTodo.id ? todo : updateTodo),
            
        });
    }

    createTodo = (newTodo) => {
        
        this.setState({
            list: [...this.state.list, { ...newTodo, id: Date.now() }],
        });
    };
}
