import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __RegisterUser } from '../services/UserService'

export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            userName: '',
            email: '',
            dob: '',
            password: '',

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    receiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login')
        }

    }
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        let user= {
            name: this.state.name,
            userName: this.state.userName,
            email: this.state.email,
            dob: this.state.dob,
            password: this.state.password,
        }
        this.props.signup(user, this.props.history)
    }

    render() {
        const { name, password, email, dob, userName } = this.state
        return (
            <div class="mainPage">
                <div className="intro">
                    <h1 className="title">Join to Experience the Fun</h1>
                    <h3 className="subheader">A place to let it all hang loose</h3>
                    <p className="description">Due to the nature of the content only those
                    over the age of 18 may access the site. (please don't turn into the media and lie >:(
                    </p>
                </div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <TextInput
                        placeholder="Name"
                        name="name"
                        type="name"
                        value={name}
                        onChange={this.update('name')}
                    />
                    <TextInput
                        placeholder="Username"
                        name="name"
                        type="name"
                        value={userName}
                        onChange={this.update('userName')}
                    />
                    <TextInput
                        placeholder="Email"
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
                    <TextInput
                        placeholder="Date of Birth"
                        name="date"
                        type="date"
                        value={dob}
                        onChange={this.update('dob')}
                    />
                    <div className="buttons">
                        <button className="singup">Sign Up</button>
                    </div>

                </form>
            </div>
        )
    }
}