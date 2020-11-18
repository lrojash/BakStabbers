import React, { Component } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StabButtons from './forms/Stabs/StabButtons'
import { __GetProfile } from '../services/UserServices'

import '../styles/ViewPost.css'

export default class ViewPost extends Component {
    constructor() {
        super()
        this.state = {
            feed: null
        }
    }
    componentDidMount() {
        this.getPosts()

    }
    getPosts = async () => {
        try {
            const profile = await __GetProfile(this.props.currentUser._id)
            const posts = profile.posts

            this.setState({ feed: posts })
        } catch (error) {
            throw error
        }
    }


    render() {
        const { feed } = this.state
        if (feed) {
            return (
                <div className="feed-container-vp">
                    {feed.reverse().map((element, index) => {
                        return (<li key={index} className="stab-box">
                            <AccountCircleIcon style={{ fontSize: 45 }} />
                            <p className="content-stab">{element.stab}</p>
                            <div className="stab-buttons">
                                {/* <button className="reply-bt">Reply</button>
                                <button className="edit-bt">Edit</button>
                                <button className="del-bt">Delete</button> */}
                                <StabButtons
                                    feed={feed}
                                />
                            </div>
                        </li>)
                    })}

                </div>
            )
        }
        return <h3>Loading...</h3>
    }
}