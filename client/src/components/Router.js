import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Home from '../pages/Home'
import Register from '../pages/Register'
import SignIn from '../components/forms/SignIn'
import SideBar from '../components/sidebar/SideBar'
import ProtectedRoute from './ProtectedRoute'
import StabBox from './StabBox'
import { __CheckSession } from '../services/UserServices'




class Router extends Component {
    constructor() {
        super()
        this.state = {
            authenticated: false,
            currentUser: null,
            pageLoading: true
        }
    }
    componentDidMount() {
        this.verifyTokenValid()
        this.setState({ pageLoading: false })
    }
    verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const session = await __CheckSession()

                this.setState(
                    {
                        currentUser: session.user,
                        authenticated: true
                    },
                    () => this.props.history.push('/home')
                )
                console.log('current state', this.state)
            } catch (error) {
                this.setState({ currentUser: null, authenticated: false })
                localStorage.clear()
            }
        }
    }
    toggleAuthenticated = (value, user, done) => {
        this.setState({ authenticated: value, currentUser: user }, () => done())
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route
                        exact
                        path="/register"
                        component={(props) => (
                            <Register {...props} />
                        )}
                    />
                    <Route
                        exact
                        path="/"
                        component={(props) => (
                            <LandingPage>
                                <SignIn
                                    toggleAuthenticated={this.toggleAuthenticated}
                                    {...props}
                                />
                            </LandingPage>
                        )}
                    />
                    <ProtectedRoute
                        authenticated={this.state.authenticated}
                        path="/home"
                        component={(props) => (
                            <Home
                                currentUser={this.state.currentUser}
                                authenticated={this.state.authenticated}
                                {...props} />
                        )}
                    />
                    <ProtectedRoute
                        authenticated={this.state.authenticated}
                        path="/SideBar"
                        component={(props) => (
                            <SideBar {...props} currentUser={this.state.currentUser} />
                        )}
                    />
                </Switch>
            </main>
        )
    }
}
export default withRouter(Router)