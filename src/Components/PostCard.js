export default function PostCard({id, owner, content}) {
    return (<div className="card">
        <h2>Post {id}</h2>
        
        <p>{content}</p>
    </div>)
}
