import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import HomeFeed from '../components/HomeFeed'
import Trends from '../components/Trends'
import LandingPage from '../pages/LandingPage'
import { NavLink } from 'react-router-dom'

export default({ authenticated, currentUser, className }) => {
    return authenticated && currentUser ? (
        <header className={className}>
            <HomeFeed />
            <SideBar />
            <Trends />
        </header>
    ) : (
        <header className={className}>
            <LandingPage />
        </header>
    )
}