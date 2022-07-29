import './App.css';
import { Provider } from 'react-redux';

import TodoForm from './store/components/TodoForm';
import TodoList from './store/components/TodoList';

import store from './store';


function App() {
    
    return (
      <div className="container">
          
          <Provider store={store}>
             <TodoList  />       
     
             <TodoForm  />
        </Provider>                
     
      </div>
    );
}
export default App;

