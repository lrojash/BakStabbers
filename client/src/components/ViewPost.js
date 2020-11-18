import React, { Component } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { __GetProfile } from '../services/UserServices'

export default class ViewPost extends Component {
    constructor() {
        super()
        this.state = {
            feed: null
        }
    }
    componentDidMount() {
        this.getPosts()
        console.log('inside did mount vp')
    }
    getPosts = async () => {
        try {
            const profile = await __GetProfile(this.props.currentUser._id)
            const posts = profile.posts
            console.log(posts)
            this.setState({ feed: posts })
            console.log("inside get posts viewposts:", this.feed)
            posts.map((element) => {
                console.log(element.stab)
            })
        } catch (error) {
            throw error
        }
    }


    render() {
        const { feed } = this.state
        if (feed) {
            return (
                <div className="feed-container-vp"
                    overflow="scroll">
                    {feed.reverse().map((element, index) => {
                        return (<li key={index} className="stab-box">
                            <AccountCircleIcon style={{ fontSize: 45 }} />
                            <p className="content">{element.stab}</p>

                        </li>)
                    })}
                    <div> works </div>
                </div>
            )
        }
        return <h3>Loading...</h3>
    }
}