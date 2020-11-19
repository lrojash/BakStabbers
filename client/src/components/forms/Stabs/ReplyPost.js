import React, { Component } from 'react'
import TextInput from '../../TextInput'
import { __DeletePost, __GetPost } from '../../../services/PostServices'
import '../../../styles/StabBox.css'

export default class Delete extends Component {
    constructor() {
        super()
        this.state = {
            stab: ''
        }
    }
    handleSubmit = async () => {
        console.log(this.props.feed[0].stab)
        alert('reply')
    }

    render() {
        const { stab } = this.state
        return (
            <div>
                <button className="edit-bt" onClick={this.handleSubmit}>Reply</button>
            </div >
        )
    }
}