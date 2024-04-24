import { useEffect, useState } from "react"
import Feed from "../Components/Feed"
import Navigation from "../Components/Navigation"
import { getNewestPost, getPostById, getTrendingPost } from "../Services/postApi"
import PostCard from "../Components/PostCard"
import { Link } from "react-router-dom"

export default function FeedPage({user}) {
    const [currentFeed, setCurrentFeed] = useState("trendings")

    const [postId, setPostId] = useState(null)

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        let feedFetcher = getTrendingPost
        if(currentFeed == 'newest'){
            feedFetcher = getNewestPost
        }
        feedFetcher().then((posts)=>{
            setPosts(posts)
        })
    }, [currentFeed])

    const onPostSelect = (id)=> {
        setPostId(id)
    }

    let post
    if(postId) {
        post = getPostById(postId)
    }

    let postEl
    if(post) {
       postEl = (<div>
            <PostCard id={post?.id} owner={post?.owner} content={post?.content} />
        </div>)
    }
    return (
        <div>
            {user ? <div>Bonjour {user.pseudo}</div> : <Link to="/login" >Connexion</Link>}
            {postEl}
            {/* {post && (<div>
                <PostCard id={post?.id} owner={post?.owner} content={post?.content} />
            </div>)} */}
            <Navigation
                currentFeed={currentFeed}
                onTrendingClick={()=>{ 
                    setPosts([])
                    setCurrentFeed("trendings")
                }}
                onNewestClick={()=> {
                    setPosts([])
                    setCurrentFeed("newest")
                }}
            />
            <Feed 
                feedType={currentFeed}
                feedContent={posts}
                onPostSelect={onPostSelect}/>
        </div>
    )
}
