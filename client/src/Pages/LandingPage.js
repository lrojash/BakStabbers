import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import '../styles/LandingPage.css'

export default class LandingPage extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            formError: false
        }
    }
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value, formError: false })
    }
    handleSubmit = () => { }

    render() {
        const { email, password } = this.state
        return (
            <div class="mainPage">
                <div className="intro">
                    <h1>Welcome to BakStabber</h1>
                    <h3>A place to let it all hang loose</h3>
                </div>
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
                    <div className="buttons">
                        <button className="buttons">Sign In</button>
                        <button className="buttons">Sign Up</button>
                    </div>

                </form>
            </div>
        )
    }
}

