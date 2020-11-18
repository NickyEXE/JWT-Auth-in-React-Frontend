import React, { Component } from 'react'

export default class Signup extends Component{

  state = {
    username: "",
    password: "",
    passwordConfirmation: ""
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value})

  onSubmit = (e) => {
    e.preventDefault()
    const { username, password, passwordConfirmation } = this.state
    if (password === passwordConfirmation){
      const body = {username: username, password: password}
      fetch('http://localhost:3000/users', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      .then(response => response.json())
      .then(response => {
        if (!response.errors){
          this.props.setUser(response)
        } else {
          alert(response.errors)
        }
      })
    } else {
      alert("Passwords do not match!")
    }
  }

  render(){
    return (
      <>
        <h1>Signup!</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            Username:
            <input type="text" name="username" onChange={this.onChange} value={this.state.username} />
          </label><br/>
          <label>
            Password:
            <input type="password" name="password" onChange={this.onChange} value={this.state.password} />
          </label><br/>
          <label>
            Password Confirmation:
            <input type="password" name="passwordConfirmation" onChange={this.onChange} value={this.state.passwordConfirmation} />
          </label><br/>
          {/* <input type="submit" value="Signup!" /> */}
        </form>
        <br/>
        <button onClick={this.props.toggleSignup}>Or Login!</button>
      </>
    )
  }
 }
