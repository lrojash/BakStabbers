import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import NavLink from '../components/Nav'
import UserCard from '../components/UserCard'
import Stab from '../components/Stabs/StabInput'
import Feed from '../components/Stabs/Feed'
import { __GetProfile } from '../services/UserService'
import '../styles/Profile.css'

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postFetchError: false,
            staabs: []
        }
    }
    componentDidMount() {
        this.getStaabs()
    }
    getStaabs = async() => {
        try {
            const profileData = await __GetProfile(this.props.currentUser._id)
            this.setState({ staabs: profileData.posts})
        } catch(error) {
            this.setState({ postFetchError: true })
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
                    <h2 className="feed-title">Feed</h2>
                    <Feed />
                </div>
                <div className="stab">
                    <Stab />
                </div>
            </div>
        )
    }
}