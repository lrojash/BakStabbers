import React from 'react'
import { Link } from 'react-router-dom'
import SideBarLayout from './SideBarLayout'
import FaceIcon from '@material-ui/icons/Face'
import ForumIcon from '@material-ui/icons/Forum'
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { IconButton } from '@material-ui/core';

import '../../styles/SideBar.css'


export default ({ authenticated, currentUser }) => {
    return (
        <div className="SideBar-Container">
            <Link to="/" className="SideBar-Home">
                <IconButton onClick={() => { localStorage.clear() }}>
                    <ExitToAppOutlinedIcon style={{ fontSize: 50 }} />
                    <h4>Loggout</h4>
                </IconButton>

            </Link>
            <div className="SideBar">
                <Link to="/profile">
                    <SideBarLayout Icon={FaceIcon} text="Profile" />
                </Link>
                <Link to="/Messages">
                    <SideBarLayout Icon={ForumIcon} text="Messages" />
                </Link>
                <Link to="Connections">
                    <SideBarLayout Icon={PeopleAltSharpIcon} text="Connections" />
                </Link>
                {/* <SideBarLayout Icon={ExitToAppOutlinedIcon} text="Logout" /> */}
            </div>
        </div>
    )
}

