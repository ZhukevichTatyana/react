import './App.css';
import React, { useEffect } from 'react';
import { fetchList } from './store/actions/todoActions';

import { useDispatch } from 'react-redux';
//import { useEffect } from 'react';
import TodoForm from './store/components/TodoForm';
import TodoList from './store/components/TodoList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchList());
  }, []);

    return (
      <div className="container">
          
             <TodoList  />         
             <TodoForm  />
         
      </div>
    );
}
export default App;

