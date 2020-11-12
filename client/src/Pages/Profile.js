import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import NavLink from '../components/Nav'

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
                <h1>profile</h1>
            </div>
        )
    }
}