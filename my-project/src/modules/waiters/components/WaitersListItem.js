import { Link } from 'react-router-dom';

import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useDispatch } from 'react-redux';
import {deleteUser, editUser } from '../../../store/actions/waitersActions';

function WaitersListItem({ item }) {
  const dispatch = useDispatch();      
    return (
        
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Link to={`/waiters/${item.id}`}>
                {item.name}
                 {item.surname} 
                
            </Link>
              </TableCell>
              <TableCell align="right">{item.table}</TableCell>
              
              <TableCell align="right">{item.salary}</TableCell>
              <TableCell align="right">
                <TableCell align="right">
                <span className="edit-btn" onClick={onEditItemClick}>
                         Edit
                </span></TableCell></TableCell>
              <TableCell align="right">
                <span className="delete-btn" onClick={onDeleteItemClick}>
                    ✘
                </span></TableCell>
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
export default WaitersListItem;
