import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

import menuSelector from '../../../store/selectors/menuSelector';
import checkSelector from '../../../store/selectors/checkSelector';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchList } from '../../../store/actions/menuActions';
import { createDishes } from '../../../store/actions/checkActions';
import { useDispatch } from 'react-redux';

export default function CheckboxList() {
   const [checked, setChecked] = useState([{price: 0}]);
   
    const check = useSelector(checkSelector);
   
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(fetchList());
    }, []); 
  const dlist = useSelector(menuSelector);

  const handleToggle = (value) => () => {
    
    const currentIndex = checked.indexOf(value);
   
    const newChecked = [...checked];
    
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
  
    setChecked(newChecked);
     
   dispatch(createDishes(newChecked));
   
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {dlist.map((value) => {
        const labelId = `checkbox-list-label-${value.id}`;

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
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.dishes }  />
            </ListItemButton>
          </ListItem>
        );
      })}

    </List>
    
  );
 
}
