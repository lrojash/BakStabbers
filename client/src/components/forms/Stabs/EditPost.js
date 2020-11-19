import React, { Component } from 'react'
import { __UpdatePost } from '../../../services/PostServices'
import PopUp from '../../../components/forms/PopUp'
import '../../../styles/StabBox.css'


export default class EditPost extends Component {
    constructor() {
        super()
        this.state = {
            stab: ''
        }
    }

    handleSubmit = async (e) => {
        const feedId = this.props.feed[this.props.feed.length - 1]
        alert('edit')
        try {
            await __UpdatePost(this.state, feedId)
            this.setState({
                stab: ''
            })
        } catch (error) {
            throw error
        }
        
    }

    render() {
        const { stab } = this.state
        return (
            <div>
                <button className="edit-bt" onClick={this.handleSubmit}>Edit</button>
                <PopUp stab = {stab} />
            </div >
        )
    }
}