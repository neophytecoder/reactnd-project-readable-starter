import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'

import { findCommentsAsync } from '../Comment/actions'
import { findPostAsync } from './actions'
import CommentComponent from '../Comment'
import ListComponent from '../UI/List'
import SortedListComponent from '../UI/SortedList'
import {timeStampToDate} from '../utils'
import {CreateCommentContainerComponent} from '../Comment/FormContainer'

class PostDetailContainerComponent extends Component {
  render() {
    const { match } = this.props;
    const ListCommentsComponent = ListComponent(CommentComponent, this.props.comments);
    const SortedListCommentsComponent = SortedListComponent(CommentComponent, this.props.comments);
    return (
      <div>
        {match.params.id} <br/>
        {
          this.props.post &&
          <PostDetailComponent {...this.props.post}
            totalComment={this.props.comments.length} />
        }
        <CreateCommentContainerComponent id={match.params.id} body="" author="" />
        <div>
          <Link to={`${match.url}/hot`}>hot</Link>
          <Link to={`${match.url}/new`}>new</Link>
        </div>
        <Switch>
          <Route path={`${match.url}/:sort`} component={SortedListCommentsComponent} />
          <Route exact path={match.url} component={ListCommentsComponent} />
        </Switch>
      </div>
    )
  }

  componentDidMount() {
    const postId = this.props.match.params.id;
    this.props.findPost(postId);
    this.props.findComments(postId);
  }
}

const PostDetailComponent = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>by {props.author}, at {timeStampToDate(props.timestamp)}, vote {props.voteScore}</p>
      <h3>{props.body}</h3>
      <div>
        <div><Link to={`/post/edit/${props.id}`}>edit</Link></div>
        <div><Link to={`/post/delete/${props.id}`}>remove</Link></div>
      </div>
      <div>#Comments: {props.totalComment}</div>
      -----------------------
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const posts = state.posts.filter((post) => post.id === ownProps.match.params.id);
  console.log("mapStateToProps", state);
  let post;
  if (posts.length !== 0) {
    post = posts[0];
  }
  const comments = state.comments
    .filter((comment) => comment.parentId === ownProps.match.params.id)
    .filter(comment => !comment.deleted)
    .sort((commentOne, commentTwo) => commentTwo.voteScore - commentOne.voteScore);
  return {post, comments, ...ownProps};
}

const mapDispatchToProps = (dispatch) => ({
  findComments: (postId) => dispatch(findCommentsAsync(postId)),
  findPost: postId => dispatch(findPostAsync(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainerComponent);
