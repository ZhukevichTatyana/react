import { API_URLIMG } from '../config';
import { useState, useEffect } from 'react';
import React from 'react';
import { useParams}  from 'react-router-dom'

export default function GetPhotoList() {
  const params = useParams();
  const idd = +params.id;
  const URLIMG = API_URLIMG + idd
  console.log('PhotoList', URLIMG);
  const [imglist, setImglist] = useState([]);
  const [error,setError] = useState('');
  
  useEffect(() =>  {
      fetch(URLIMG)
      .then(res => res.json())
      .then(data => setImglist(data))
      .catch(setError('Something went wrong'));
  },[]);
 setError('');
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