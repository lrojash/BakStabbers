import React, { Component } from 'react'
import TextInput from '../../components/TextInput'
import { __ModPassword } from '../../services/UserServices'

export default class ChangePassword extends Component {
    constructor() {
        super()
        this.state = {
            password: "",
        }
    }
    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await __ModPassword(this.props.currentUser._id, this.state)
            alert('Password Changed')
            window.location.reload(false);
        } catch (error) {
            throw error
        }
    }
    render() {
        const { password } = this.state
        return (
            <div className="Change-pass-form">
                <form className="change-form" onSubmit={this.handleSubmit}>
                    <TextInput
                        placeholder="New Password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <button className="change-password">Change</button>
                </form>
            </div>
        )
    }
}