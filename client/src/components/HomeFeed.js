import React from 'react'
import StabBox from './StabBox'

import '../styles/HomeFeed.css'

export default ({currentUser}) => {
    console.log("from homefeed:", currentUser._id)
    return (
        <div className="HomeFeed-Container">
            <StabBox currentUser={currentUser}/>
        </div>
    )
}