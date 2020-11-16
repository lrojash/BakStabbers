import React from 'react'
import SignUp from '../components/forms/SignUp'
import '../styles/Register.css'

export default () => {
    return (
            <div className="SingUp-Container">
                <div className="intro">
                    <h1 className="title">Join to Experience the Fun</h1>
                    <h3 className="subheader">A place to let it all hang loose</h3>
                    <p className="description">Due to the nature of the content only those
                    over the age of 18 may access the site. (please don't turn into the media and lie >:(
                    </p>
                </div>
                <SignUp />
            </div>
    )
}