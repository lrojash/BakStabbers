import React, { Component } from 'react'
import '../styles/Stab.css'

export default class Stab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stab: ''
        }
    }
    handleChange() {}
    postStab() {}

    render() {
        return (
            <div className="stab-container">
                <h2 className="stab-title">Create New Stab</h2>
                <input
                    className="stab-field"
                    type='text'
                    placeholder="Stab"
                    value={this.state.text}
                    onChange={this.handleChange}>
                </input>
                <button onClick={this.postStab}>
                    post
                </button>
            </div>
        )
    }
}