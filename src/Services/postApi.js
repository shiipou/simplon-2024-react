import { baseApi } from "./_apiConfig"

export async function getPostById(id) {
    return await fetch(new URL(`/post/${id}`, baseApi))
        .then(response => response.json())
}

export async function getTrendingPost() {
    return await fetch(new URL('/posts/trending', baseApi))
        .then(response => response.json())
}

export async function getNewestPost() {
    return await fetch(new URL('/posts/newest', baseApi))
        .then(response => response.json())
}
