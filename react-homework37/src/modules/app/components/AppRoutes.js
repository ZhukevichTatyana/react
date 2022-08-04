import { Navigate, Route, Routes } from 'react-router-dom';

import AlbumDetailsWrapper from '../../albums/pages/AlbumDetailsWrapper';
import AlbumsListPage from '../../albums/pages/AlbumsListPage';
import AlbumsModule from '../../albums/pages/AlbumsModule';
import PhotosListPage from '../../photos/pages/PhotosListPage';
import PhotosModule from '../../photos/pages/PhotosModule';
import App from './App';
import React from 'react';
import UserDetailsWrapper from '../../users/pages/UserDetailsWrapper';
import UsersListPage from '../../users/pages/UsersListPage';
import UsersModule from '../../users/pages/UsersModule';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Navigate to="/users" />}></Route>
                <Route   Route path="users" element={<UsersModule />}>
                    <Route index element={<UsersListPage />} />
                    <Route path=":userId" element={<UserDetailsWrapper />}>
                         <Route index element={<Navigate to="albums" />} />
                        <Route path="albums" element={<AlbumsModule />}>
                             <Route index element={<AlbumsListPage />}></Route>
                            <Route path=":albumId" element={<AlbumDetailsWrapper />} >
                                <Route index element={<Navigate to="photos" />} />
                                <Route path="photos" element={<PhotosModule />}>
                                    <Route index element={<PhotosListPage />}/>
                                </Route> 
                             </Route> 
                        </Route>
                    </Route>
                    </Route>    
             </Route>
        </Routes>
    );
}

export default AppRoutes;