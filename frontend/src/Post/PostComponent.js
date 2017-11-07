import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { votePost } from '../Post/actions'
import { timeStampToDate } from '../utils'

class PostComponent extends Component {
  render() {
    const { post } = this.props;
    return (
      <div>
          <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
          {timeStampToDate(post.timestamp)} by {post.author} to {post.category}
          <p>
          Vote: {post.voteScore}
          <button onClick={() => this.props.upVote(post) }>Thumbs up</button>
          <button onClick={() => this.props.downVote(post) }>Thumbs down</button></p>
          <div>
            <div><Link to={`/post/edit/${post.id}`}>edit</Link></div>
            <div><Link to={`/post/delete/${post.id}`}>remove</Link></div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => (ownProps)

const mapDispatchToProps = (dispatch) => ({
  upVote: (post) => dispatch(votePost(post, "upVote")),
  downVote: (post) => dispatch(votePost(post, "downVote"))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent);
