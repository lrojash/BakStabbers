import React, { Component } from 'react'
import StabBox from './StabBox'
import SingleFeed from './SingleFeed'
import { __GetPosts } from '../../services/PostService'

export default class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staabs: null
        }
    }

    componentDidMount() {
        this.getStaabs()
    }
    getStaabs = async () => {
        try {
            const stab = await __GetPosts(this.props.match.params.post_id)
            this.setState({ stab })
        } catch (error) {
            throw error
        }
    }
    render() {
        const { stab } = this.state
        if (this.state.stab) {
            return (
                <div>

                </div>
            )
        }
    }
}
