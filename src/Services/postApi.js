const jsonTrending = [{id:1, owner:1, content: 'Test'},{id:2, owner:1, content: 'Test2'},{id:3, owner:1, content: 'Test3'}]
const jsonNewest = [{id:15, owner:1, content: 'Test'},{id:14, owner:1, content: 'Test2'},{id:13, owner:1, content: 'Test3'}]
const jsonAllPosts = [...jsonTrending, ...jsonNewest]

// const baseApi = new URL('http://localhost:3000')

export function getPostById(id) {
    return jsonAllPosts.find((post)=>post.id === id)
}

export function getTrendingPost() {
    return jsonTrending
}

export function getNewestPost() {
    return jsonNewest
}
