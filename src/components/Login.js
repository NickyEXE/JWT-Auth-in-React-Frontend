import React, {Component} from 'react'
import { login } from '../services/requests'

export default class Login extends Component {

  state = {
    username: "",
    password: ""
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value})

  onSubmit = (e) => {
    e.preventDefault()
    const {password, username} = this.state
    const body = {username: username, password: password}
    login(body)
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
      <div className="login">
      <h1>Login!</h1>
      <form onSubmit={this.onSubmit}>
        <label>Username:
          <input type="text" onChange={this.onChange} name="username"/><br/>
        </label>
        <label>Password:
          <input type="password" onChange={this.onChange} name="password"/><br/>
        </label>
        <input type="submit" value="Login"/>
      </form>
      <br/>
      <button onClick={this.props.toggleSignUp}>Sign up instead!</button>
      </div>
    )
  }
}
