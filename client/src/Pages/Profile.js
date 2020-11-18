import React from 'react'
import ChangePassword from '../components/forms/ChangePassword'
import ChangeUsername from '../components/forms/ChangeUsername'
import DeleteAccount from '../components/forms/DeleteAccount'
import '../styles/Profile.css'

export default ({ currentUser, authenticated }) => {
    return (
        <div className="profile-container">
            <div className="intro-profile">
                <h1 className="profile-title">Profile Settings</h1>
                <h2 className="profile-subheader">Change username, password, or delete account</h2>
            </div>
            <div className="set-buttons">
                <ChangePassword
                    authenticated={authenticated}
                    currentUser={currentUser} />
                <ChangeUsername
                    authenticated={authenticated}
                    currentUser={currentUser}
                />
                <DeleteAccount
                    authenticated={authenticated}
                    currentUser={currentUser}
                />
            </div>
        </div>
    )
}