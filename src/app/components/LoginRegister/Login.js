import React, { Component } from 'react';
import { usersServices } from "../../../services/usersServices";
import { Switch, Route, Redirect } from 'react-router-dom';

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            error: null
        }
    }

    handleChange = (event) => {
        this.setState({
            error: null
        });
        const field = event.target.name
        this.setState({
            [field]: event.target.value
        });
    }

    handleLogin = (event) => {
        event.preventDefault()
        const username = this.state.username;
        const password = this.state.password;

        const loginUserObj = {
            username: username,
            password: password
        }

        usersServices.loginUser(loginUserObj)
            .then(response => {
                return response.json()
            })
            .then(response => {
                console.log(response)
                if (response.error) {
                    this.setState({ error: response.error.message })
                } else if (!this.state.error) {
                    localStorage.setItem('sessionId', response.sessionId);
                    this.props.onSuccessfulLogin();
                }
            })
            .then(() => {
                usersServices.fetchProfile()
                .then((response) =>{
                    window.localStorage.setItem("userId", response.userId);
                })
            })

        this.setState({
                username: "",
                password: "",
                
            })
    }

    render() {
        return (
            <div className="row login-form">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="username" type="text" className="validate" name="username" value={this.state.username} onChange={this.handleChange} />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" name="password" value={this.state.password} onChange={this.handleChange} />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="col s12">
                            <a className="#e57373 red lighten-2 btn" disabled={this.state.error || !this.state.password || !this.state.username} onClick={this.handleLogin} type="submit" name="action">Login</a>
                            <p>{this.state.error}</p>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}