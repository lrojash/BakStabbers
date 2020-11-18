import React, { Component } from 'react'
import TextInput from '../../components/TextInput'
import { __DeleteUser } from '../../services/UserServices'

export default class DeleteAccount extends Component {
    constructor() {
        super()
        this.state = {
            authenticated: true,
            confirm: ""
        }
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            
        } catch (error) {
            throw error
        }
    }
    render() {
        const { confirm } = this.state
        return (
            <div className="Change-pass-form">
                <form className="change-form" onSubmit={this.handleSubmit}>
                    <TextInput
                        placeholder="confirm"
                        name="text"
                        type="text"
                        value={confirm}
                        onChange={this.handleChange}
                    />
                    <button className="change-password">Change</button>
                </form>
            </div>
        )
    }
}