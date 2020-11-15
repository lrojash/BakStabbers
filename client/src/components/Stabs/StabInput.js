import React, { Component } from 'react'
import StabBox from './StabBox'
import '../../styles/Stab.css'

export default class StabInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            newStab: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleReceiveProps = (nextProps) => {
        this.setState({ newStab: nextProps.newStab.text })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let stab = {
            text: this.state.text
        }
        // this will send the stab to the databasexs
        // this.props.composeStab(stab)
        this.setState({text: ''})
    }

    update = () => {
        return (
            e => this.setState({
                text: e.currentTarget.value
            })
        )
    }

    render() {
        return (
            <div className="stab-container">
                <h2 className="stab-title">Create New Stab</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="stab-field"
                        type='textarea'
                        placeholder="Stab"
                        value={this.state.text}
                        onChange={this.update()}>
                    </input>
                    <button onClick={this.handleSubmit}>
                        post
                </button>
                </form>
                <StabBox text={this.state.newStab} />
            </div>
        )
    }
}