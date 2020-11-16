import React from 'react'
import '../../styles/SideBarLayout.css'

export default ({ Icon, text }) => {
    return (
        <div className="SideBar-Layout">
            <Icon style={{ fontSize: 75 }}/>
            <h3 className="Sidebar-Text">{text}</h3>
        </div>
    )
}