import { useCallback, useEffect, useState } from 'react';

import { getPhotosList } from '../services/photosService';
import useAlbum from '../../albums/hooks/useAlbum';

export default function usePhotosList() {
    const [list, setList] = useState([]);
    
    const album = useAlbum();
    const fetchList = useCallback(
        () => getPhotosList(album.userId).then(setList),
        [album.userId, getPhotosList, setList],
    );

    useEffect(() => {
        fetchList();
    }, [fetchList]);

    return { list, fetchList };
}