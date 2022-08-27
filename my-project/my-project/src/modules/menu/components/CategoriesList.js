
import React, { useEffect } from 'react';
import {useState} from 'react';
import CategoriesListItem from './CategoriesListItem';
import { API_URL_CAT } from '../../../config';
import { getList} from '../../../api'

function CategoriesList() {

    const [list, setList] = useState([]);
    const [error,setError] = useState(null);
   const URL = API_URL_CAT;
    useEffect(() =>  {
       
        getList(URL)
        .then(data => setList(data))
        .catch(setError('Something went wrong'));
    },[]);
    return (
        <ul>             
           <h2>Категории</h2>

            {list.map((item) => (            
                <CategoriesListItem           
                         item={item}
                         key={item.id}
                 />
           
            ))}

        </ul>
    );
}

export default CategoriesList;


