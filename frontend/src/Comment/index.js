import React, {Component} from 'react'
import { connect } from 'react-redux'

import {timeStampToDate} from '../utils'
import { upvoteCommentAsync, downvoteCommentAsync} from './actions'

class CommentComponent extends Component {
  upVote = commentId => event => {
    event.preventDefault();
    console.log("upVote", commentId);
    this.props.upVote(commentId);
  }

  downVote = commentId => event => {
    event.preventDefault();
    this.props.downVote(commentId);
  }

  render() {
    const { id, body, author, timestamp, voteScore } = this.props.post;
    console.log("props", this.props, id);
    return (
      <div key={id}>
        <p>{body}</p>
        <p>by {author} at {timeStampToDate(timestamp)} with {voteScore}</p>
        <a href="#" onClick={this.upVote(id)}>thumbs up</a>
        <a href="#" onClick={this.downVote(id)}>thumbs down</a>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => (props)
const mapDispatchToProps = dispatch => ({
  upVote: commentId => dispatch(upvoteCommentAsync(commentId)),
  downVote: commentId => dispatch(downvoteCommentAsync(commentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentComponent);
