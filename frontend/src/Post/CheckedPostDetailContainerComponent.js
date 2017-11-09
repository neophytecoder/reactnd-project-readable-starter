import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PostDetailContainerComponent from './PostDetailContainerComponent'

class CheckedPostDetailContainerComponent extends Component {
  render() {
    if (!this.props.post) {
      return (
        <div class="alert alert-danger" role="alert">
          The post is not found. Please, return to <Link to="/">home</Link>!
        </div>
      )
    }
    return <PostDetailContainerComponent />
  }
}

const mapStateToProps = (state, ownProps) => {
  const posts = state.posts.filter((post) => post.id === ownProps.match.params.id);
  console.log("mapStateToProps", state);
  let post;
  if (posts.length !== 0) {
    post = posts[0];
  }
  return {post, ...ownProps}
}

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CheckedPostDetailContainerComponent);
