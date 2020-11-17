import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import HomeFeed from '../components/HomeFeed'
import Trends from '../components/Trends'

import '../styles/Home.css'

export default ({ children, currentUser, authenticated }) => {
    console.log("from home feed", currentUser._id)
    console.log('from home feed', authenticated)
    return (
        <div className="Home-Container">
            <SideBar
                authenticated={authenticated}
                currentUser={currentUser} />
            <HomeFeed
                authenticated={authenticated}
                currentUser={currentUser} />
            <Trends
                authenticated={authenticated}
                currentUser={currentUser}
            />
            {children}
        </div>
    )
}