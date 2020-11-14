import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import NavLink from '../components/Nav'
import UserCard from '../components/UserCard'
import SingleFeed from '../components/SingleFeed'
import '../styles/Profile.css'

export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            postFetchError: false,
            posts:[]
        }
    }
    render() {
        return (
            <div className="profile">
                <div className="nav">
                    <NavLink />
                </div>
                <div className="userCard">
                    <UserCard />
                </div>
                <div className="feed">
                    <SingleFeed />
                </div>
                <div className="stab">
                    Stabs here
                </div>
            </div>
        )
    }
}