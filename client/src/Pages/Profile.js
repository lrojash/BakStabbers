import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import NavLink from '../components/Nav'
import UserCard from '../components/UserCard'
import Stab from '../components/Stab'
import '../styles/Profile.css'

export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            postFetchError: false,
            posts: []
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
                    feed goes here
                 
                </div>
                <div className="stab">
                    <Stab />
                </div>
            </div>
        )
    }
}