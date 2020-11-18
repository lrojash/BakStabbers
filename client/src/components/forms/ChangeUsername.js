import React, { Component } from 'react'
import TextInput from '../../components/TextInput'
import { __ModUsername } from '../../services/UserServices'

export default class ChangeUsername extends Component {
    constructor() {
        super()
        this.state = {
            userName: "",
        }
    }
    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        console.log(this.props.currentUser._id)
        try {
            await __ModUsername(this.props.currentUser._id)
            alert('Username Changed')
            
        } catch (error) {
            throw error
        }
    }
    render() {
        const { userName } = this.state
        
        return (
            <div className="Change-pass-form">
                <form className="change-form" onSubmit={this.handleSubmit}>
                    <TextInput
                        placeholder="New Username"
                        name="userName"
                        type="userName"
                        value={userName}
                        onChange={this.handleChange}
                    />
                    <button className="change-username">Change</button> 
                </form>
            </div>
        )
    }
}