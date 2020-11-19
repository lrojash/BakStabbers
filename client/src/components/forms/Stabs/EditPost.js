import React, { Component } from 'react'
import { __UpdatePost } from '../../../services/PostServices'
import TextInput from '../../TextInput'
import '../../../styles/StabBox.css'



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
            await __UpdatePost(this.state, this.props.feed[0]._id)
            alert('Stab Updated')
        } catch (error) {
            throw error
        }
    }

    render() {
        const { stab } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextInput
                        placeholder="Stab"
                        name="stab"
                        value={stab}
                        onChange={this.handleChange}
                    />
                    <button>Stab</button>
                </form>
            </div>
        )
    }
}