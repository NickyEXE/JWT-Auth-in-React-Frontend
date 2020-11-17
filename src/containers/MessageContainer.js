import React from 'react'
import MessageList from './MessageList'
import MessageForm from '../components/MessageForm'
import { postMessage, getMessages } from '../services/requests'

class MessageContainer extends React.Component {

  state = {
    name: null,
    messages: [],
    interval: null
  }

  getMessages = () => {
    getMessages(this.props.channel)
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
    postMessage(this.props.channel, message)
    .then(newMessage => this.setState({messages: [...this.state.messages, newMessage]}))
  }

  render(){
    return(
      <>
        <h3>#{this.state.name}</h3>
        <MessageForm addMessage={this.addMessage} user={this.props.user}/>
        <MessageList messages={this.state.messages} updateStateFromJSON={this.updateStateFromJSON}/>
      </>
    )
  }
}

export default MessageContainer
