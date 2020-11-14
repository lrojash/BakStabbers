import React from 'react'
import SingleFeed from './SingleFeed'

export default ({ children }) => (
    <div className="feed-container">
        <SingleFeed />
        {children}
    </div>
)