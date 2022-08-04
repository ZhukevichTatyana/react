import React from 'react';

function PhotosListItem({ photo }) {
    
    return (
    
        <div  className={'img-item' } key={photo.id} >  
                 
            <img src={photo.thumbnailUrl} alt=""/>
            
        </div>
    )
}

export default PhotosListItem;