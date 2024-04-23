import { useState } from "react"
import Feed from "../Components/Feed"
import Navigation from "../Components/Navigation"
import { getNewestPost, getPostById, getTrendingPost } from "../Services/postApi"
import PostCard from "../Components/PostCard"

export default function FeedPage() {
    const [currentFeed, setCurrentFeed] = useState("trendings")

    const [postId, setPostId] = useState(null)

    const onPostSelect = (id)=> {
        setPostId(id)
    }

    let feedEl
    if(currentFeed === 'newest') {
        feedEl = <Feed 
            feedType="Newest" 
            feedContent={getNewestPost()}
            onPostSelect={onPostSelect}/>
    } else {
        feedEl = <Feed 
            feedType="Trendings" 
            feedContent={getTrendingPost()} 
            onPostSelect={onPostSelect}/>
    }

    const post = getPostById(postId)

    let postEl
    if(post) {
       postEl = (<div>
            <PostCard id={post?.id} owner={post?.owner} content={post?.content} />
        </div>)
    }
    return (
        <div>
            {postEl}
            {/* {post && (<div>
                <PostCard id={post?.id} owner={post?.owner} content={post?.content} />
            </div>)} */}
            <Navigation
                currentFeed={currentFeed}
                onTrendingClick={()=>{ setCurrentFeed("trendings") }}
                onNewestClick={()=> { setCurrentFeed("newest") }}
            />
            {feedEl}
        </div>
    )
}
