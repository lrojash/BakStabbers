import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import Profile from '../Pages/Profile'
import SignUp from '../Pages/SignUp'

class Router extends Component {
    constructor() {
        super()
        this.state = {
            pageLoading: true
        }
    }
    componentDidMount() {
        this.setState({ pageLoading: false })
    }
    render() {
        return (
            <main>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={(props) => (
                            <LandingPage {...props} />
                        )}
                    />
                    <Route
                        path="/profile"
                        component={(props) => (
                            <Profile {...props} />
                        )}
                    />
                    <Route
                        path="/register"
                        component={(props) => (
                            <SignUp {...props} />
                        )}
                    />
                </Switch>
            </main>
        )
    }
}

export default Router