import AlbumsListItem from './AlbumsListItem';
import React from 'react';

function AlbumsList({ list }) {
    return (
        <ul>
            {list.map((album) => (
                <AlbumsListItem  key={album.id} album={album} />
            ))}
        </ul>
    );
}

export default AlbumsList;