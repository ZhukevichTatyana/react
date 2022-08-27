import { Link } from 'react-router-dom';
import React from 'react';
import { deleteUser } from '../../../store/actions/menuActions';
import { useDispatch } from 'react-redux';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
function DishesListItem({item} ) {
   
    const dispatch = useDispatch();
    return (
        
        <TableRow
        key={item.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
        <Link to={`/menu/${item.catId}/${item.id}`}>
          {item.dishes}
           
          
      </Link>
        </TableCell>
        <TableCell align="right">{item.price}</TableCell>
        
        <TableCell align="right">{item.catId}</TableCell>
        
          <TableCell align="right">
          <span className="edit-btn" onClick={onEditItemClick}>
                   Edit
          </span>
          </TableCell>
        <TableCell align="right">
          <span className="delete-btn" onClick={onDeleteItemClick}>
              ✘
          </span>
          </TableCell>
      </TableRow>

    );
    function onDeleteItemClick(e) {
       
         dispatch(deleteUser(item.id)); 
 
    };
    function onEditItemClick(e) { 
  
      // dispatch(editUser(item))
      console.log('edit',item);
    };
}

export default DishesListItem;
