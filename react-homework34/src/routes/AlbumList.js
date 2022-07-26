import React from 'react';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_URL } from '../config';

export default function AlbumList() {
    const [list, setList] = useState([]);
    const [error,setError] = useState(null);
   
    useEffect(() =>  {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setList(data))
        .catch(setError('Something went wrong'));
    },[]);
    return (                     
     
        <ul className="container">
             
          {error ? error : null} 
          {list.map((item) => (            
            <Link            
            to={`/AlbumList/${item.userId}`}
            key={item.id}
          >
            {item.title}
          </Link>
           
                ))}
          </ul> 
         
          ); 
    
}