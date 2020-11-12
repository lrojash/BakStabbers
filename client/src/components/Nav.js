import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'

export default ({ className }) => {
    return (
        <nav>
            <NavLink activeClassName="nav-active" to="/profile">
                Profile
            </NavLink>
            <NavLink activeClassName="nav-active" to="/connections">
                Connections
            </NavLink>
            <NavLink activeClassName="nav-active" to="/">
                Sign Out
            </NavLink>
        </nav>
    )
}