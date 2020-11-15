import React, { Component } from 'react'
import StabBox from './StabBox'
import SingleFeed from './SingleFeed'
import { __GetPosts } from '../../services/PostService'

export default class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staabs :[]
        }
    }

    componentDidMount() {
        this.fetchPosts()
    }

    fetchPosts = async() => {
        const posts = await __GetPosts()
        this.setState({ posts: posts })
    }
    render() {
        if (this.state.staabs.length === 0) {
            return (<div>There are no Staabs currently.{'\n'}
            Stab Away!</div>)
        } else {
            return (
                <div>
                    <h2> All Stabs </h2>
                    {this.state.staabs.map(stab => (
                        <StabBox key={stab._id} text={stab.text} />
                    ))}
                   
                </div>
            )
        }
    }
}
