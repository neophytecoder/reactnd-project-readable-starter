import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addComments, editComment } from './actions'
import * as ForumAPI from '../utils/ForumAPI'
import { makeid } from '../utils'
import CommentFormComponent from './Form'

class CreateCommentContainer extends Component {
  onSubmit = (state) => (event) => {
    event.preventDefault();
    const comment = {
      id: makeid(20),
      timestamp: Date.now(),
      body: state.body,
      author: state.author,
      parentId: this.props.id
    };
    console.log("onSubmit", comment);
    ForumAPI.postComment(comment)
      .then(comment => this.props.addComment(comment));
  }

  render() {
    return (
        <CommentFormComponent  {...this.props} onSubmit={this.onSubmit} />
    );
  }
}

class EditCommentContainer extends Component {
  onSubmit = (state) => (event) => {
    event.preventDefault();
    const comment = {
      id: state.id,
      timestamp: Date.now(),
      body: state.body,
      author: state.author
    };
    console.log("onSubmit", comment);
    ForumAPI.editComment(comment)
      .then(comment => {
        console.log("EditCommentContainer", comment);
        this.props.editComment(comment);
      });
  }

  render() {
    return (
        <CommentFormComponent  {...this.props} onSubmit={this.onSubmit} />
    );
  }
}

const mapStateToProps = (state, ownProps) => (ownProps)
const mapDispatchToProps = (dispatch) => ({
  addComment: (comment) => dispatch(addComments([comment])),
  editComment: (comment) => dispatch(editComment(comment))
})

export const CreateCommentContainerComponent = connect(mapStateToProps, mapDispatchToProps)(CreateCommentContainer);
export const EditCommentContainerComponent = connect(mapStateToProps, mapDispatchToProps)(EditCommentContainer);
