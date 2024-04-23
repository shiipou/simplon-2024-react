export default function Navigation({ currentFeed, onTrendingClick, onNewestClick }) {
    return (
        <div>
            <button
                onClick={onTrendingClick}
                className={ currentFeed === 'trendings' ? 'active' : undefined }
            >Trendings</button>
            <button 
                onClick={onNewestClick}
                className={ currentFeed === 'newest' ? 'active' : undefined }
            >Newest</button>
        </div>
    )
}
