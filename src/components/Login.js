import React, { Component } from 'react'
import { requestLogin } from '../services/requests'

export default class Login extends Component{

  state = {
    username: "",
    password: ""
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value})

  onSubmit = (e) => {
    e.preventDefault()
    const { username, password } = this.state
    const body = {username: username, password: password}
    requestLogin(body)
    .then(response => {
      if (!response.errors){
        this.props.setUser(response)
      } else {
        alert(response.errors)
      }
    })
  }

  render(){
    return (
      <>
        <h1>Login!</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            Username:
            <input type="text" name="username" onChange={this.onChange} value={this.state.username} />
          </label>
          <label>
            Password:
            <input type="password" name="password" onChange={this.onChange} value={this.state.password} />
          </label>
          <input type="submit" value="Login!" />
        </form>
        <br/>
        <button onClick={this.props.toggleSignup}>Or Sign Up!</button>
      </>
    )
  }


 }
