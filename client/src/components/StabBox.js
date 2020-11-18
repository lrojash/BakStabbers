import React, { Component } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { __UploadPost } from '../services/PostServices'
import TextInput from '../components/TextInput'

import '../styles/StabBox.css'

export default class StabBox extends Component {
    constructor() {
        super()
        this.state = {
            stab: '',
        }

    }
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await __UploadPost(this.state, this.props.currentUser._id)
            this.setState({
                stab:''
            })
            
        } catch (error) {
            throw error 
        }
    }
    render() {
        const { stab } = this.state
        return (
            <div className="StabBox-Container">
                <div className="StabBox-title">
                    <h1>Home Feed</h1>
                </div>
                <div className="StabBox">
                    <AccountCircleIcon style={{ fontSize: 50 }} />
                    <form className="stabs" onSubmit={this.handleSubmit}>
                        <TextInput
                            placeholder="Stab"
                            name="stab"
                            value={stab}
                            onChange={this.handleChange}
                        />
                        <button className="Stab-Button">Stab</button>
                    </form>

                </div>
            </div>
        )
    }
}
