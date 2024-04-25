import { useContext, useEffect, useMemo, useState } from "react"
import Feed from "../Components/Feed"
import Navigation from "../Components/Navigation"
import { getNewestPost, getPostById, getTrendingPost } from "../Services/postApi"
import PostCard from "../Components/PostCard"
import { Link } from "react-router-dom"
import { UserContext } from "../Providers/UserContext"
import { getUserByToken } from "../Services/userApi"

export default function FeedPage() {
    const { userToken } = useContext(UserContext)
    const [user, setUser] = useState(null)
    const [currentFeed, setCurrentFeed] = useState("trendings")

    const [selectedPostId, setSelectedPostId] = useState(null)
    const [selectedPost, setSelectedPost] = useState(null)

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        let feedFetcher = getTrendingPost
        if(currentFeed === 'newest'){
            feedFetcher = getNewestPost
        }
        feedFetcher().then((posts)=>{
            setPosts(posts)
        })
    }, [currentFeed])

    useEffect(()=>{
        if(userToken) {
            getUserByToken(userToken)
                .then((user)=>{
                    setUser(user)
                })
        }
    }, [userToken])

    useEffect(()=>{
        if(selectedPostId) {
            getPostById(selectedPostId).then(post=>{
                setSelectedPost(post)
            })
        }
    }, [selectedPostId])

    const onPostSelect = (id)=> {
        setSelectedPostId(id)
    }

    let selectedPostEl
    if(selectedPost) {
       selectedPostEl = (<div>
            <PostCard
                id={selectedPost.id} 
                owner={selectedPost.owner} 
                content={selectedPost.content}
            />
        </div>)
    }
    return (
        <div>
            {user ? <div>Bonjour {user.username}</div> : <Link to="/login" >Connexion</Link>}
            {selectedPostEl}
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
