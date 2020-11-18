import React, { Component } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextInput from '../../TextInput'

export default ({ currentUser, }) => {
    return (
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
    )
}