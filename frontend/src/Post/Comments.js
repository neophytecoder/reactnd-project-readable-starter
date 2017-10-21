import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as ForumAPI from "../utils/ForumAPI"

class CommentsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {comments: []};
  }

  obtainComments = (id) => {
    ForumAPI.getAllComments(id)
      .then((comments) => (
        comments.sort((commentOne, commentTwo) => commentTwo.voteScore - commentOne.voteScore)
          .filter((comment) => !comment.deleted && !comment.parentDeleted)
      ))
      .then((comments) => {
        console.log(comments);
        this.setState({comments});
      });
  }

  render() {
    return (
      <ul>
        {
          this.state.comments.map((comment) => (
            <li key={comment.id}>{comment.body}</li>
          ))
        }
      </ul>
    )
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, "Comments");
    if (nextProps.id && this.props.id !== nextProps.id) {
      const id  = nextProps.id;
      this.obtainComments(id);
    }
  }

  componentDidMount() {
    if (this.props.id) {
      const id  = this.props.id;
      this.obtainComments(id);
    }
  }

}

export default CommentsComponent;
