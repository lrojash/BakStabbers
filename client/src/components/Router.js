import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import Profile from '../Pages/Profile'
import SignUp from '../Pages/SignUp'
import { __CheckSession } from '../services/UserService'
import ProtectedRoute from './ProtectedRoute'
import StabInput from './Stabs/StabInput'

class Router extends Component {
    constructor() {
        super()
        this.state = {
            authenticated: false,
            currentUser: null,
            pageLoading: true
        }
    }
    verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const session = await __CheckSession()
                this.setState(
                    {
                        currentUser: session,
                        authenticated: true
                    },
                    () => this.props.history.push('/profile')
                )
            } catch (error) {
                this.setState({
                    currentUser: null,
                    authenticated: false
                })
                localStorage.clear()
            }
        }
    }
    toggleAuthenticated = async (value, user, done) => {
        this.setState({
            authenticated: value,
            currentUser: user
        }, () => done())
    }

    componentDidMount() {
        this.verifyTokenValid()
        this.setState({ pageLoading: false })
    }

    render() {
        return (
            <main>
                {this.state.pageLoading ? (
                    <h3>Loading...</h3>
                ) : (
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
                            <ProtectedRoute
                                authenticated={this.state.authenticated}
                                path="/profile"
                                component={(props) => {
                                    <Profile {...props} currentUser={this.state.currentUser} />
                                }}
                            />
                            <ProtectedRoute
                                authenticated={this.state.authenticated}
                                path="/post"
                                component={(props) => {
                                    <StabInput {...props} currentuser={this.state.currentUser} />
                                }}
                            />
                        </Switch>
                    )}

            </main>
        )
    }
}

export default Router