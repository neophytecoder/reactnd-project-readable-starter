import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'

import { findCommentsAsync } from '../Comment/actions'
import { findPostAsync, votePost } from './actions'
import EditableCommentComponent from '../Comment/EditableComment'
import ListComponent from '../UI/List'
import SortedListComponent from '../UI/SortedList'
import {timeStampToDate} from '../utils'
import {CreateCommentContainerComponent} from '../Comment/FormContainer'
import '../Home/App.css'
import * as  arrowUp  from '../Entypo/Entypo/arrow-up.svg'
import * as  arrowDown  from '../Entypo/Entypo/arrow-down.svg'

class PostDetailContainerComponent extends Component {
  render() {
    const { match, post, comments } = this.props;
    const ListCommentsComponent = SortedListComponent(EditableCommentComponent,
      this.props.comments, "hot");
    const SortedListCommentsComponent = SortedListComponent(EditableCommentComponent,
      this.props.comments);

    return (
      <div className="container">
        <div className="row post-detail">
          <div className="col-1">
            <button type="button" className="btn btn-primary"
              onClick={() => this.props.upVote(post) }>
                <img src={arrowUp} width="36" height="36" />
            </button>
            <div className="w-100" />
            <div className={`text-center VoteSize`}>{post && post.voteScore}</div>
            <div className="w-100" />
            <button type="button" className="btn btn-danger"
              onClick={() => this.props.downVote(post) }>
                <img src={arrowDown} width="36" height="36" />
            </button>
          </div>
          {
            post &&
            <PostDetailComponent {...post}
              totalComment={this.props.comments.length} />
          }
        </div>
        <CreateCommentContainerComponent id={match.params.id} body="" author="" />
        <div className="row">
          <div className="col-1"><Link to={`${match.url}/hot`}>hot</Link></div>
          <div className="col-1"><Link to={`${match.url}/new`}>new</Link></div>
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
    <div className="col-9">
      <h1><div className="post-detail-title">{props.title}</div></h1>
      <div className="w-100" />
      <div className="post-detail-extras">
        by {props.author}, at {timeStampToDate(props.timestamp)}
      </div>
      <div className="post-detail-body">{props.body}</div>
      <div className="row">
        <div className="col-1"><Link to={`/post/edit/${props.id}`}>edit</Link></div>
        <div className="col-1"><Link to={`/post/delete/${props.id}`}>remove</Link></div>
        <div className="col-3 font-weight-bold">{props.totalComment} comments</div>
      </div>
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
  findPost: postId => dispatch(findPostAsync(postId)),
  upVote: (post) => dispatch(votePost(post, "upVote")),
  downVote: (post) => dispatch(votePost(post, "downVote"))
})


export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainerComponent);
