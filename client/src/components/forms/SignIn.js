import React, { Component } from 'react'
import TextInput from '../../components/TextInput'
import '../../styles/SignIn.css'

export default class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            formError: false
        }
    }
    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
            formError: false
        })
    }
    handleSubmit = () => { }
    render() {
        const { email, password } = this.state
        return (
            <div className="Sign-In-Form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <TextInput
                        placeholder="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <TextInput
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                    />

                    <button className="Sign-In">Sign In</button>
                    {/* {this.state.formError ? <p>Error while logging in</p> : <p></p>} */}
                    {/* <button className="singup">Sign Up</button> */}
                </form>
            </div >
        )
    }
}