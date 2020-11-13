import React from 'react'
import Comment from '../components/Comment.js'
import '../styles/Picture.css'
import Pic from '../components/Picture'
import '../styles/Feed.css'

export default ({ children, ...rest }) => {
    return (
        <div className="post-card" {...rest}>
            <Comment />
        </div>
    )
}