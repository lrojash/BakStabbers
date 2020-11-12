import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import Profile from '../Pages/Profile'

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
                </Switch>
            </main>
        )
    }
}

export default Router