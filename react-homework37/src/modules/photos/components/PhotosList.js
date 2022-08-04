import PhotosListItem from './PhotosListItem';
import React from 'react';

function PhotosList({ list }) {
   
    return (
        <div className="container-img ">
            {list.map((photo) => (
                <PhotosListItem  key={photo.id} photo={photo} />
            ))}
        </div>
    );
}

export default PhotosList;
