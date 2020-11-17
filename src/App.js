// import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import MessageContainer from './containers/MessageContainer'
import ChannelContainer from './containers/ChannelContainer'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Signup from './components/Signup'
import { autologin } from "./services/requests"

class App extends Component {

  state = {
    channel: null,
    user: {id: null, username: null},
    signup: false
  }

  changeChannel = (id) => this.setState({ channel: id })

  mainContainer = () => {
    return this.state.user.id
    ?
      this.state.channel ?
        <MessageContainer channel={this.state.channel} user={this.state.user}/> :
        <Welcome/>
    :
      this.state.signup ?
        <Signup toggleSignUp={this.toggleSignUp} setUser={this.setUser}/>
      : <Login setUser={this.setUser} toggleSignUp={this.toggleSignUp}/>
  }

  toggleSignUp = () => this.setState({signup: !this.state.signup})

  setUser = (user) => {
    this.setState({user: user})
    localStorage.user_id = user.id
  }

  clearUser = () => this.setState({user: {id: null, username: null}})

  componentDidMount(){
    if (localStorage.user_id){
      autologin()
      .then(response => {
        if (!response.errors){
          this.setUser(response)
        } else {
          alert(response.errors)
        }
      })
    }
  }

  render(){
    return (<>
        <header>
        {this.state.user.id && <button onClick={this.clearUser}>Logout</button>}
        <h1 onClick={() => this.changeChannel(null)}>Welcome to Hacker Chat</h1>
        <h3>A place for hackers and slashers to cut loose and cut flesh</h3>
        </header>
        <ChannelContainer changeChannel={this.changeChannel}/>
      <main>{this.mainContainer()}</main>
      </>
    );
  }
}

export default App;
