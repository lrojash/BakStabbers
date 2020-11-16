import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../styles/StabBox.css'

export default () => {
    return (
        <div className="StabBox-Container">
            <div className="StabBox-title">
                <h1>Home Feed</h1>
            </div>
            <div className="StabBox">
                <AccountCircleIcon style={{ fontSize: 50 }}/>
                <input type="text" placeholder="What are you stabbing at"/>
                <button className="Stab-Button">Stab</button>
            </div>
        </div>
    )
}