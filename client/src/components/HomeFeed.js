import React from 'react'
import StabBox from './StabBox'
import ViewPosts from './ViewPost'

import '../styles/HomeFeed.css'

export default ({currentUser}) => {
    // console.log("from homefeed:", currentUser)
    return (
        <div className="HomeFeed-Container">
            <StabBox currentUser={currentUser}/>
            <ViewPosts currentUser={currentUser} />
        </div>
    )
}