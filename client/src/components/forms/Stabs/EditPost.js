import React, { Component } from 'react'
import { __UpdatePost } from '../../../services/PostServices'
import TextInput from '../../TextInput'
import '../../../styles/EditPost.css'



export default class EditPost extends Component {
    constructor() {
        super()
        this.state = {
            stab: ''
        }
    }
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }
    handleSubmit = async (e) => {
        try {
            await __UpdatePost(this.state, this.props.feed[this.props.feed.length -1]._id)
            alert('Stab Updated')
        } catch (error) {
            throw error
        }
    }

    render() {
        const { stab } = this.state
        return (
            <div className="edit-post-container">
                <form onSubmit={this.handleSubmit} className='edit-form'>
                    <TextInput
                        placeholder="Stab"
                        name="stab"
                        value={stab}
                        onChange={this.handleChange}
                    />
                    <button className="edit-button">Stab</button>
                </form>
            </div>
        )
    }
}