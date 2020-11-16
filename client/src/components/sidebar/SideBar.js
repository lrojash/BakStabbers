import React from 'react'
import SideBarLayout from './SideBarLayout'
import HomeIcon from '@material-ui/icons/Home'
import FaceIcon from '@material-ui/icons/Face'
import ForumIcon from '@material-ui/icons/Forum'
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import '../../styles/SideBar.css' 

export default () => {
    return (
        <div className="SideBar-Container">
            <div className="SideBar-Home">
                <HomeIcon style={{ fontSize: 50 }}/>
            </div>
            <div className="SideBar">
                <SideBarLayout Icon={FaceIcon} text="Profile"/>
                <SideBarLayout Icon={ForumIcon} text="Messages" />
                <SideBarLayout Icon={PeopleAltSharpIcon} text="Connections" />
                <SideBarLayout Icon={ExitToAppOutlinedIcon} text="Loggout" />
            </div>
        </div>
    )
}