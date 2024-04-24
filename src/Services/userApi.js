import { baseApi } from "./_apiConfig"

export async function getUserById(id) {
    return await fetch(new URL(`/users/${id}`, baseApi))
        .then(response => response.json())
}

export async function userLogin(username, password) {
    return await fetch(new URL('/login', baseApi), {
        method: 'post',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })
        .then(response => response.json())
}

export async function getUserByToken(token) {
    return await fetch(new URL(`/users/current`, baseApi), {
        headers: {
            authorization: token
        }
    })
        .then(response => response.json())
}
