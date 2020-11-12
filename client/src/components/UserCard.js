import React from 'react'
import Username from '../components/UserName'
import Pic from '../components/Picture'
import '../styles/UserCard.css'

export default ({ children, ...rest }) => {
    return (
        <div className="card" {...rest}>
            <ul>
                <Pic />
                <Username />
            </ul>
        </div>
    )
}