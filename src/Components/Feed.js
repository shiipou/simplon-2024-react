import { useMemo } from "react";
import PostCard from "./PostCard";

export default function Feed({ feedType, feedContent, onPostSelect }) {
    
    const nb_posts = useMemo(() => {
        return feedContent.reduce((acc, _post) => {
            return acc+1
        }, 0)
    }, [feedContent])

    return (
        <div>
            <h2>{feedType} feeds ({nb_posts} posts)</h2>
            <div>
                {
                    feedContent.map(post => (
                        <a onClick={()=>onPostSelect(post.id)}><PostCard id={post.id} owner={post.owner} content={post.content}/></a>
                    ))
                }
            </div>
        </div>
    )
}
