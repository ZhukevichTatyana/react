import React from 'react';

import { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoList from '../TodoList/TodoList';

export default function App() {
    const [list, setList] = useState([]);
    const [error,setError] = useState('');
    useEffect(() =>  {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setList(data))
        .catch(setError('Something went wrong'));
    },[])
   
        return (
            <div className="container">
                {error ? error : null}
                <TodoList
                    list={list}
                    onToggle={toggleTodo}
                    onRemove={removeTodo}
                />
                <NewTodoForm 
                 onSave={createTodo} 
                />
            </div>
        );         

    function toggleTodo(id) {
        const todo = list.find((item) => item.id === id);
        todo.isDone = !todo.isDone;
        const updateTodo = todo;
        //  const updateTodo = { ...todo, isDone: !todo.isDone  };
        console.log(updateTodo);
        fetch(API_URL + id, {
            method: 'PUT',
            body: JSON.stringify(updateTodo),
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(() => {
            setList(list.map((item => item.id !==id ? item : todo)))
        })
        setList(list.map((item => item.id ? item : updateTodo)))
    };

    function removeTodo(id) {
        const newList = list.filter((item) => item.id !== id);
console.log(id);
        setList(newList);
         fetch(API_URL + id, {
            method: 'DELETE',
        });        
    };

    function createTodo(newTodo) {
        newTodo = {
            ...newTodo,
            id: Date.now(),
            isDone: false,
        };
        
        setList( [...list, newTodo]);
         fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo),
        }).then((res) => res.json());
    };
}
