import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'

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
                </Switch>
            </main>
        )
    }
}

export default Router