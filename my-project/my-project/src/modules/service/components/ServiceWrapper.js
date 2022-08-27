import Button from '@mui/material/Button';
import React from 'react';

import waitersSelector from '../../../store/selectors/waitersSelector';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { createTable, createWaiter } from '../../../store/actions/checkActions';
import {useState} from 'react';

  function  ServiceWrapper() {
    const wlist = useSelector(waitersSelector); 
    
    const dispatch = useDispatch();
    
    
    const table = +prompt('Введите номер стола');

     
        const waiter2 = wlist.find((item) => item.table==table);
        console.log(waiter2);
           dispatch(createTable(table));
           dispatch(createWaiter(waiter2.name + waiter2.surname));
          
    return (
     
      < div>
          <Button variant="contained">Обслуживание</Button>
                <h4>Столик:{table}</h4>
                  
                 <h4>Официант:{waiter2.name + waiter2.surname}</h4> 
                <h4>Блюда:</h4>
          
     
      </div>      
    );
  
 }

export default ServiceWrapper;