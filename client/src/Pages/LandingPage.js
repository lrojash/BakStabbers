import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import TextInput from '../components/TextInput'
import '../styles/LandingPage.css'
// import SignUp from '../Pages/SignUp'


export default class LandingPage extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            formError: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    receiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/staabs')
        }
        this.setState({ formError: nextProps.formError })
    }
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let user = {
            email: this.state.email,
            password: this.state.email
        }
        this.props.login(user)
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
                        onChange={this.update('email')}
                    />
                    <TextInput
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.update('password')}
                    />
                    <div className="buttons">
                        <button className="singin">Sign In</button>
                        <button className="singup">Sign Up</button>
                    </div>
                </form>
            </div >
        )
    }
}

