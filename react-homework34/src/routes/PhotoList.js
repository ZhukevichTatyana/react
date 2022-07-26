import { API_URLIMG } from '../config';
import { useState, useEffect } from 'react';
import React from 'react';
import { useParams}  from 'react-router-dom'

export default function PhotoList() {
  const [imglist, setImglist] = useState([]);
  const [error,setError] = useState('');
  const params = useParams();
  const idd = +params.id;
  const URLIMG = API_URLIMG + idd
 console.log(URLIMG);
  useEffect(() =>  {
      fetch(URLIMG)
      .then(res => res.json())
      .then(data => setImglist(data))
      .catch(setError('Something went wrong'));
  },[]);
 
    return (     
      <div className="container-img ">
          {error ? error : null} 
          {imglist.map((item) => (
                        <div  className={'img-item' }           
                     
                     key={item.id}
                >
                    <img src={item.thumbnailUrl} alt=""/>
                    
                </div>
                ))}                
          </div>                     
    );
  }