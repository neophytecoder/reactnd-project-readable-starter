import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {timeStampToDate} from '../utils'
import { upvoteCommentAsync, downvoteCommentAsync, deleteCommentAsync} from './actions'
import '../Home/App.css'
import * as  arrowUp  from '../Entypo/Entypo/arrow-up.svg'
import * as  arrowDown  from '../Entypo/Entypo/arrow-down.svg'

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

  editComment = (event) => {
    event.preventDefault();
    this.props.editComment();
  }

  deleteComment = comment => event => {
    event.preventDefault();
    this.props.deleteComment(comment);
  }

  render() {
    const { id, body, author, timestamp, voteScore } = this.props.post;
    console.log("props", this.props, id);
    return (
      <div key={id} className="row comment">
        <div className="col-1">
          <button type="button" className="btn btn-primary"
            onClick={this.upVote(id)}>
              <img src={arrowUp} width="24" height="24" />
          </button>
          <div className="w-100" />
          <div className={`text-center VoteSize`}>{voteScore}</div>
          <div className="w-100" />
          <button type="button" className="btn btn-danger"
            onClick={ this.downVote(id) }>
              <img src={arrowDown} width="24" height="24" />
          </button>
        </div>

        <div className="col-9">
          <div className="comment-body">{body}</div>
          <div className="comment-extras">by {author} at {timeStampToDate(timestamp)} with {voteScore}</div>
          <div className="row">
            <div className="col-1"><a href="" onClick={this.editComment}>edit</a></div>
            <div className="col-1"><a href="" onClick={this.deleteComment(this.props.post)}>remove</a></div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => (props)
const mapDispatchToProps = dispatch => ({
  upVote: commentId => dispatch(upvoteCommentAsync(commentId)),
  downVote: commentId => dispatch(downvoteCommentAsync(commentId)),
  deleteComment: comment => dispatch(deleteCommentAsync(comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentComponent);
