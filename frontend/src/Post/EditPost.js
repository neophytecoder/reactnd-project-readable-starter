import React, {Component} from 'react'
import { connect } from 'react-redux'

import * as Utils from '../utils'
import * as ForumAPI from '../utils/ForumAPI'
import FormComponent from '../Post/FormComponent'
import { editPost } from './actions'

class EditPostComponent extends Component {
  constructor(props) {
    super(props);
    if (!props.post) {
      props.history.push('/');
    }
    this.state = {post: props.post};
  }

  submitPost = (formValues) => (event) => {
    event.preventDefault();
    const post = {
      id: formValues.id,
      title: formValues.title,
      body: formValues.body
    };
    console.log(post);
    ForumAPI.editPost(post).then((data) => {
      console.log(data);
      this.props.editPost(data);
      this.props.history.goBack();
    });
  }

  render() {
    return <FormComponent post={this.state.post} handleSubmit={this.submitPost} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.id;
  const posts = state.posts.filter(post => post.id === postId);
  let post;
  if (posts.length !== 0) {
    post = posts[0];
  }
  return {post};
}

const mapDispatchToProps = (dispatch) => ({
  editPost: (post) => dispatch(editPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPostComponent);
