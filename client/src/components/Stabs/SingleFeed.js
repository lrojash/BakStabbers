import React from 'react'
import '../../styles/SingleFeed.css'

export default ({ children, ...rest }) => (
    <div className="single-feed">
        <div className='feed-username'>
            <p>{this.props.username}</p>
        </div>
        <div className="feed-stab">
            <p>{this.props.stab}</p>
        </div>
        {children}
    </div>
)