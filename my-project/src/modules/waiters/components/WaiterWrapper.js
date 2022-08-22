
import WaitersList from './WaitersList';
import WaiterForm from './WaiterForm';

import React, { useEffect } from 'react';
import { fetchList } from '../../../store/actions/waitersActions';
import store from '../../../store';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';

function WaiterWrapper() {
    const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchList());
  }, []);
    return (
        <Provider store={store}>
             <WaitersList /> ,
             <WaiterForm/>,
         </Provider>
      );
}

export default WaiterWrapper;