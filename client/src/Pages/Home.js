import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import HomeFeed from '../components/HomeFeed'
import Trends from '../components/Trends'

import '../styles/Home.css'

export default ({currentUser, authenticated}) => {
    return (
        <div className="Home-Container">
            <SideBar />
            <HomeFeed />
            <Trends />
        </div>
    )
}