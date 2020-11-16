import React, { Component } from 'react'
import TextInput from '../../components/TextInput'
import '../../styles/SignUp.css'

export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            username: '',
            email: '',
            dob: '',
            password_digest: '',
        }
    }
    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }
    handleSubmit = () => { }

    render() {
        const { name, username, email, dob, password_digest } = this.state
        return (
            <div className="SignUp-Container">
                <form className="Register-Form">
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
                        name="username"
                        type="username"
                        value={username}
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
                        name="password_digest"
                        type="password"
                        value={password_digest}
                        onChange={this.handleChange}
                    />
                    <button className="Sign-Up-Button">Sign Up</button>
                </form>
            </div>
        )
    }
}