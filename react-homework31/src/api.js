import { API_URL } from './config';

export function getUserList() {
    return fetch(API_URL).then((res) => res.json());
}

export function updateUser(updatedUser) {
    return fetch(API_URL + updatedUser.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
    }).then((res) => res.json());
}

export function removeUser(id) {
    return fetch(API_URL + id, {
        method: 'DELETE',
    });
}

export function createUser(newUser) {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    }).then((res) => res.json());
}