import React, { Component } from 'react'
import TextInput from '../components/TextInput'

export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            dob: '',
            password: ''
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }
    // handleSubmit = async(e) => {
    //     e.preventDefault()
    //     try{
    //         await __RegisterUser(this.state)
    //         this.props.history.push('/login')
    //     } catch(error) {
    //         console.log(error) 
    //     }
    // }

    render() {
        const { name, password, email, dob } = this.state
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
                        placeholder="First Name"
                        name="name"
                        type="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <TextInput
                        placeholder="Last Name"
                        name="name"
                        type="name"
                        value={name}
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
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <TextInput
                        placeholder="Date of Birth"
                        name="date"
                        type="date"
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