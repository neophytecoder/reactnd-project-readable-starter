import React, {Component} from 'react'
import {timeStampToDate} from '../utils'

class CommentComponent extends Component {
  render() {
    const { id, body, author, timestamp, voteScore } = this.props.post;
    return (
      <div key={id}>
        <p>{body}</p>
        <p>by {author} at {timeStampToDate(timestamp)} with {voteScore}</p>
      </div>
    )
  }
}

export default CommentComponent;
