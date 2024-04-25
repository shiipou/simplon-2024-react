import { useCallback, useReducer } from "react"

function handleLikeOnPost(state, action) {
    switch (action) {
        case 'increment':
            return {
                nb_like: state.nb_like + 1
            }
        case 'decrement':
            return {
                nb_like: state.nb_like - 1
            }
    }
}

export default function PostCard({id, owner, content}) {
    const [likeState, likeDispatch] = useReducer(handleLikeOnPost, { nb_like: 0 })
    const handleLike = useCallback(()=>{
        likeDispatch('increment')
    }, [likeDispatch])

    return (<div className="card">
        <h2>Post {id}</h2>
        
        <p>{content}</p>

        <button onClick={handleLike}>{"💜 " + likeState.nb_like}</button>
    </div>)
}
