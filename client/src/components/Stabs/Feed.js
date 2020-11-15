import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import StabBox from './StabBox'

export default class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staabs =[]
        }
    }
    componentDidMount() {
    }

    receiveProps(newState) {
        this.setState({ staabs: newState.staabs })
    }

    render() {
        if (this.state.staabs.length === 0) {
            return (<div>There are no Staabs currently.{'\n'}
            Stab Away!</div>)
        } else {
            return (
                <div>
                    <h2> All Stabs </h2>
                    {this.state.staabs.map(stab => (
                        <StabBox key={index} text={stab.text} />
                    ))}
                </div>
            )
        }
    }
}
