
import WaitersListItem from './WaitersListItem';

import { useSelector } from 'react-redux';
import waitersSelector from '../../../store/selectors/waitersSelector';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function WaitersList() {
  const wlist = useSelector(waitersSelector);
 
  console.log(wlist);

    return (     
            <div>
                <h2>Официанты.&nbsp;Общее число официантов = {wlist.length}</h2>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Имя официанта</TableCell>
            <TableCell align="right">Столик</TableCell>
           
            <TableCell align="right">Зарплата&nbsp;(грн)</TableCell>
            <TableCell align="right">Ред-ть</TableCell>
            <TableCell align="right">Удалить</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {wlist.map((item) => (
                        <WaitersListItem key={item.id} item={item} />
                    ))}
        </TableBody>
      </Table>
    </TableContainer>
                
                   
            </div>
    );
    

  }
export default WaitersList;
