import { ThreeSixty } from '@material-ui/icons'
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
        console.log(this.props.currentUser._id)
        try {

            // await __DeleteUser(this.props.currentUser._id)
            // alert("Account Deleted")
            // this.props.history.push('/')

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
                    <button className="Delete">Delete</button>
                </form>
            </div>
        )
    }
}