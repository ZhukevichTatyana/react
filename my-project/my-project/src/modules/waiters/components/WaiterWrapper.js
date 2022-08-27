
import WaitersList from './WaitersList';
import WaiterForm from './WaiterForm';

import React, { useEffect, useState } from 'react';
import { fetchList } from '../../../store/actions/waitersActions';
import store from '../../../store';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { unstable_composeClasses } from '@mui/material';

function WaiterWrapper() {
    const dispatch = useDispatch();
    const INITIAL_VALUE = {name: '', surname: '', table: '',salary: ''}; 
const [user, setUser] = useState(INITIAL_VALUE);
  useEffect(() => {
      dispatch(fetchList());
  }, []);
    return (
        <Provider store={store}>
             <WaitersList onEdit={editUser}/> ,
             <WaiterForm user={user}/>,
         </Provider>
      );
      function editUser(user1) {
        console.log('user1',user1);
        setUser(user1);
        console.log('user',user)
      }
}

export default WaiterWrapper;