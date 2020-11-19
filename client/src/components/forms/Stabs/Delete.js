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
    handleSubmit = async (e) => {
       
        try {
            await __DeletePost(this.props.feed[this.props.feed.length -1]._id)
            alert('Stab deleted')
            window.location.reload(false);
        } catch (error) {
            throw error
        }
    }

    render() {
        return (
            <div>
                <button className="del-bt" onClick={this.handleSubmit}>Delete</button>
            </div>
        )
    }
}