import { TimerSharp } from '@material-ui/icons'
import React, { Component } from 'react'
import TextInput from '../../TextInput'
import { __DeletePost, __GetPost } from '../../../services/PostServices'
import '../../../styles/StabBox.css'

export default class Delete extends Component {
    constructor() {
        super()
        this.state = {
            stabId: ''
        }
    }
    handleSubmit = async () => {
        try {
    
            await __DeletePost(this.props.feed[this.props.feed.length -1]._id)
            alert('Stab deleted')
        } catch (error) {
            throw error
        }
    }

    render() {
        // console.log(this.props.feed[1]._id)
        return (
            <div>
                <button className="del-bt" onClick={this.handleSubmit}>Delete</button>
            </div>
        )
    }
}