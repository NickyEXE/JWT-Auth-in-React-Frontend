import React, {Component} from 'react'

export default class MessageForm extends Component {

  state = {
    content: ""
  }

  onChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addMessage({content: this.state.content})
    this.setState({
      content: ""
    })
  }

  render(){
    return(
    <form onSubmit={this.onSubmit} className="message-form">
      <input type="content" name="content" id="content" value={this.state.content} onChange={this.onChange} />
      <br/>
      <input type="submit" value="Submit" />
    </form>
    )
  }

}
