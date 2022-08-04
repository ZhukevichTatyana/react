import React from 'react';
import AlbumDetailsPage from './AlbumDetailsPage';
import AlbumProvider from '../providers/AlbumProvider';
function AlbumDetailsWrapper() {
    return (
        <AlbumProvider>
            <AlbumDetailsPage />
        </AlbumProvider>
    );
}

export default AlbumDetailsWrapper;