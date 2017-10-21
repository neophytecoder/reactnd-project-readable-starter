import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { timeStampToDate } from '../utils'

class PostComponent extends Component {
  render() {
    const { post } = this.props;
    return (
      <div>
          <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
          {timeStampToDate(post.timestamp)} by {post.author} to {post.category}
      </div>
    )
  }
}

export default PostComponent;
