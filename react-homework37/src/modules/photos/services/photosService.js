import api from '../../../api';

export function getPhotosList(userId) {
    return api.get(`photos?albumId=${userId}`).then((response) => response.data);
}