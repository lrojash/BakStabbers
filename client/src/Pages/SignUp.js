import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __RegisterUser } from '../services/UserService'

export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            userName: '',
            email: '',
            dob: '',
            password_digest: '',

        }
    }
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value})
    }


    handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await __RegisterUser(this.state)
            this.props.history.push('/')
        } catch(error) {
            throw error 
        }
    }

    render() {
        const { name, password_digest, email, dob, userName } = this.state
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
                        onChange={this.handleChange}
                    />
                    <TextInput
                        placeholder="Username"
                        name="userName"
                        type="userName"
                        value={userName}
                        onChange={this.handleChange}
                    />
                    <TextInput
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <TextInput
                        placeholder="Password"
                        name="password_digest"
                        type="password"
                        value={password_digest}
                        onChange={this.handleChange}
                    />
                    <TextInput
                        placeholder="Date of Birth(mm/dd/yyyy)"
                        name="dob"
                        type="dob"
                        value={dob}
                        onChange={this.handleChange}
                    />
                    <div className="buttons">
                        <button className="singup">Sign Up</button>
                    </div>

                </form>
            </div>
        )
    }
}