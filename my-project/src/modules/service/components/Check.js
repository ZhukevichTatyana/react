import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';

import checkSelector from '../../../store/selectors/checkSelector';
import React from 'react';
import { useSelector } from 'react-redux';

  function  Check() {
    const check = useSelector(checkSelector);   
   
 let price = check.dishes.reduce((sum, value) =>  sum + value.price, 0);

    return (
     
        <div>          
                <h4>Столик:{check.table}</h4>
                 <h4>Официант:{check.waiter}</h4> 
                <h4>Блюда:</h4>               
             
                <h4>Цена&nbsp;(грн):</h4>              
                
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {check.dishes.map((value) => {
      
        return (

          <ListItem 
            key={value.id}
             secondaryAction={
              <IconButton edge="end" aria-label="comments">
             
             {value.price}
               </IconButton>
              
            }
            disablePadding 
          >
             <ListItemButton role={undefined}  > 
             
               <ListItemText  primary={value.dishes }  />
            </ListItemButton> 
          </ListItem>
        ); 
       })}

    </List>
    
    <h3>Итого:{price}</h3>
          </div>
          
    );
 }

export default Check;