import React from 'react'
import { requestLike } from '../services/requests'
import LikeButton from './LikeButton'

class Message extends React.Component {

  // constructor(){
  //   super()
  //   this.onClick = this.onClick.bind(this)
  // }

  onClick = () => {
    requestLike(this.props.id)
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
