import React from 'react'
import MessageList from './MessageList'
import MessageForm from '../components/MessageForm'
import { requestCreateMessage } from '../services/requests'

class MessageContainer extends React.Component {

  state = {
    name: null,
    messages: [],
    interval: null
  }

  getMessages = () => {
    fetch(`http://localhost:3000/channels/${this.props.channel}`)
    .then(res => res.json())
    .then(this.updateStateFromJSON)
  }

  updateStateFromJSON = json => this.setState({messages: json.messages, name: json.name})

  componentDidMount(){
    this.getMessages()
    const interval = setInterval(this.getMessages, 3000)
    this.setState({ interval })
  }

  componentDidUpdate(prevProps){
    if (prevProps.channel !== this.props.channel){
      this.getMessages()
    }
  }

  componentWillUnmount(){
    clearInterval(this.state.interval)
  }

  addMessage = (message) => {
    requestCreateMessage(this.props.channel, message)
    .then(newMessage => this.setState({messages: [...this.state.messages, newMessage]}))
  }

  render(){
    return(
      <>
        <h3>#{this.state.name}</h3>
        <MessageForm addMessage={this.addMessage}/>
        <MessageList messages={this.state.messages} updateStateFromJSON={this.updateStateFromJSON}/>
      </>
    )
  }
}

export default MessageContainer
