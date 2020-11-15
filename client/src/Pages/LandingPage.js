import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import '../styles/LandingPage.css'
import { __LoginUser } from '../services/UserService'


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
        this.setState({ [target.name]: target.value, formError: false})
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        let userData = {
            email:this.state.email,
            password: this.state.password 
        }
        const user = await __LoginUser(userData)
    }

    render() {
        const { email, password } = this.state
        return (
            <div class="mainPage">
                <div className="intro">
                    <h1 className="title">Welcome to BakStabber</h1>
                    <h3 className="subheader">A place to let it all hang loose</h3>
                    <p className="description">This is the place where you are free to express your ideas without judgment. Surround yourself with
                    those with the same dark humor as you. Profiles are set to be private and only the ones on the same level
                    as you can read your AWESOME ideas!
                    </p>
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
                        <button type="submit" className="singin">Sign In</button>
                        {/* <button className="singup">Sign Up</button> */}
                    </div>
                </form>
            </div >
        )
    }
}

