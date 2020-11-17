import React, { Component } from 'react'
import TextInput from '../../components/TextInput'
import { __RegisterUser } from '../../services/UserServices'
import '../../styles/SignUp.css'

export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            userName: '',
            email: '',
            dob: '',
            password: '',
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
            await __RegisterUser(this.state)
            this.props.history.push('/')
        } catch (error) {
            throw error
        }
    }

    render() {
        const { name, userName, email, dob, password } = this.state
        return (
            <div className="SignUp-Container">
                <form className="Register-Form" onSubmit={this.handleSubmit}>
                    <TextInput
                        placeholder="Name"
                        name="name"
                        type="name"
                        value={name}
                        onChange={this.handleChange}
                        className="Name"
                    />
                    <TextInput
                        placeholder="Username"
                        name="userName"
                        type="userName"
                        value={userName}
                        onChange={this.handleChange}
                    />
                    <TextInput
                        placeholder="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <TextInput
                        placeholder="Date of Birth(mm/dd/yyyy)"
                        name="dob"
                        type="dob"
                        value={dob}
                        onChange={this.handleChange}
                    />
                    <TextInput
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <button className="Sign-Up-Button">Sign Up</button>
                </form>
            </div>
        )
    }
}