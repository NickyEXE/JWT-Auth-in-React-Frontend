import React from 'react'
import LikeButton from './LikeButton'
import { like } from '../services/requests'

class Message extends React.Component {

  // constructor(){
  //   super()
  //   this.onClick = this.onClick.bind(this)
  // }

  onClick = () => {
    like(this.props.id)
    .then(this.props.updateStateFromJSON)
  }

  render(){
    return (
      <li>
        <div className="username">
          <strong>{this.props.username}: </strong>
        </div>
        <div className="message">
          { this.props.content }
        </div>
        <LikeButton onClick={this.onClick} numberOfLikes={this.props.like_count}/>
      </li>
      )
  }
}

export default Message
