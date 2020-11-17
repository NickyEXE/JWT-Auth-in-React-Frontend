import React, {Component} from 'react'
import { createUser } from '../services/requests'

export default class Signup extends Component {

  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value})

  onSubmit = (e) => {
    e.preventDefault()
    const {password, passwordConfirmation, username} = this.state
    const body = {username: username, password: password}
    if (password === passwordConfirmation){
      createUser(body)
      .then(response => {
        if (!response.errors){
          this.props.setUser(response)
        } else {
          alert(response.errors)
        }
      })
    } else {
      alert("Passwords didn't match!")
    }
  }

  render(){
    return (
      <div className="login">
      <h1>Sign Up!</h1>
      <form onSubmit={this.onSubmit}>
        <label>Username:
        <input type="text" onChange={this.onChange} name="username"/><br/>
        </label>
        <label>Password:
        <input type="password" onChange={this.onChange} name="password"/><br/>
        </label>
        <label>Password Confirmation:
        <input type="password" onChange={this.onChange} name="passwordConfirmation"/><br/>
        </label>
        <input type="submit" value="Sign Up"/>
      </form>
      <button onClick={this.props.toggleSignUp}>Login instead!</button>
      </div>
    )
  }
}
