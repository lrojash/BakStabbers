import React, { Component } from 'react'
import { __UploadPost } from '../../services/PostService'
import TextInput from '../TextInput'
import '../../styles/Stab.css'

export default class StabInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stab: '',
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await __UploadPost(this.state, this.props.currentUser._id)
            this.props.history.push('/profile')
        } catch (error) {
            throw error
        }
    }

    render() {
        const { stab } = this.state
        return (
            <div className="stab-container">
                <h2 className="stab-title">Create New Stab</h2>
                <form onSubmit={this.handleSubmit}>
                    <TextInput
                        className="stab-field"
                        placeholder="Stab"
                        name="stab"
                        value={stab}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleSubmit}>
                        post
                </button>
                </form>
                {/* <StabBox text={this.state.newStab} /> */}
            </div>
        )
    }
}