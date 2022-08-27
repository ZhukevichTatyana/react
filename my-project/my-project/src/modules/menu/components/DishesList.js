
import DishesListItem from './DishesListItem';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useEffect} from 'react';
import { useParams}  from 'react-router-dom';
import { API_URL_DISH } from '../../../config';
import { fetchListUrl } from '../../../store/actions/menuActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import menuSelector from '../../../store/selectors/menuSelector';
import DishesForm from './DishesForm';

function DishesList() {
    const params = useParams();    
    const idd =+params.menuId;       
    const URL = API_URL_DISH + idd;       
    
    const dispatch = useDispatch();
    const dlist = useSelector(menuSelector);
    useEffect(() => {
        dispatch(fetchListUrl(URL));
    }, []);  
    
    return (     
            <div>
                <h2>Блюда</h2>
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Блюдо</TableCell>
            <TableCell align="right">Цена</TableCell>
           
            <TableCell align="right">Код Категории</TableCell>
            <TableCell align="right">Ред-ть</TableCell>
            <TableCell align="right">Удалить</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
                    {dlist.map((item) => (
                        <DishesListItem key={item.id} item={item} />
                    ))}
               </TableBody>
      </Table>
    </TableContainer>  
    <DishesForm/>  
            </div>
    );
}

export default DishesList;

