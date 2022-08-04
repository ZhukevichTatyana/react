import { useCallback, useEffect, useState } from 'react';

import { getAlbumsList } from './services/albumsService';

import useUser from '../../users/hooks/useUser';
export default function useAlbumsList() {
    const [list, setList] = useState([]);
    const user = useUser();

    const fetchList = useCallback(
        () => getAlbumsList(user.id).then(setList),
        [user.id, setList],
    );

    useEffect(() => {
        fetchList();
    }, [fetchList]);

    return { list, fetchList };
}