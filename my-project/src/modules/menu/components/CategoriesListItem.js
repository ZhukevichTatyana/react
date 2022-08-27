import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import React from 'react';

function CategoriesListItem({ item }) {
   
    return (
        <ListItem >
            <Link to={`/menu/${item.id}`}>{item.catname}</Link>
        </ListItem>
    );
}
export default CategoriesListItem;
