import React, { Component } from 'react'
import StabBox from './StabBox'
import SingleFeed from './SingleFeed'
import { __GetPosts } from '../../services/PostService'

export default class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staabs: []
        }
    }

    componentDidMount() {
        this.getPosts()
    }
    getPosts = async () => {
        try {
            const staabs = await __GetPosts()
            this.setState({ stabs: [...this.state.staabs, ...staabs] })
        } catch (error) {
            throw error
        }
    }
    render() {
        const { staabs } = this.state
        if (staabs.length === 0) {
            return (<div>There are no Staabs currently.{'\n'}
            Stab Away!</div>)
        } else {
            return (
                <div>
                    <h2> All Stabs </h2>
                    <SingleFeed
                        key={stab.id}
                        onClick={() => this.props.history.push(`/posts/${post._id}`)}
                    />
                </div>
            )
        }
    }
}
