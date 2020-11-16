import React from 'react'
import SignIn from '../components/forms/SignIn'
import '../styles/LandingPage.css'
import { useHistory } from 'react-router-dom'

export default () => {
    const history = useHistory()
    return (
        <div className="LandingPage-Container">
            <div className="Intro">
                <h1 className="title">Welcome to BakStabber</h1>
                <h2 className="subheader">A place to let it all hang loose</h2>
                <p className="description">This is the place where you are free to express your ideas without judgment. Surround yourself with
                those with the same dark humor as you. Profiles are set to be private and only the ones on the same level
                as you can read your AWESOME ideas!
                </p>
            </div>
            <div className="Access-Info">
                <SignIn />
                <button className="Register-Button" onClick={() =>
                    history.push("/register")}>Sign Up</button>
            </div>
        </div>
    )

}
