import PhotosList from '../components/PhotosList';
import React from 'react';
import usePhotosList from '../hooks/usePhotosList';

function PhotosListPage() {
     const { list } = usePhotosList();
    return (
        <div>
            Photos List
             <PhotosList list={list} /> 
        </div>
    );
}

export default PhotosListPage;