import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Home from '../pages/Home'
import Register from '../pages/Register'



class Router extends Component {
    constructor() {
        super()
        this.state = {
            authenticated: false,
            currentUser: null,
            pageLoading: true
        }
    }
    render() {
        return (
            <main>
                {/* this will be a protected route  */}
                <Switch>
                    <Route
                        exact
                        path="/home"
                        component={(props) => (
                            <Home {...props} />
                        )}
                    />
                    <Route
                        exact
                        path="/"
                        component={(props) => (
                            <LandingPage {...props} />
                        )}
                    />
                    <Route
                        exact
                        path="/register"
                        component={(props) => (
                            <Register {...props} />
                        )}
                    />
                </Switch>
            </main>
        )
    }
}
export default Router