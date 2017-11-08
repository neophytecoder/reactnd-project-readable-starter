import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { votePost } from '../Post/actions'
import { timeStampToDate } from '../utils'
import * as  arrowUp  from '../Entypo/Entypo/arrow-up.svg'
import * as  arrowDown  from '../Entypo/Entypo/arrow-down.svg'
import '../Home/App.css'

class PostComponent extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="row post-row">
          <div className="col-2 col-lg-1">
            <button type="button" className="btn btn-primary"
              onClick={() => this.props.upVote(post) }>
                <img src={arrowUp} width="36" height="36" />
            </button>
            <div className="w-100" />
            <div className={`text-center VoteSize`}>{post.voteScore}</div>
            <div className="w-100" />
            <button type="button" className="btn btn-danger"
              onClick={() => this.props.downVote(post) }>
                <img src={arrowDown} width="36" height="36" />
            </button>
          </div>
          <div className="col-10">
            <h1><Link to={`/post/${post.id}`}>{post.title}</Link></h1>
            <h5>{timeStampToDate(post.timestamp)} by {post.author} to {post.category}</h5>
            <div className="row">
              <div className="col-1"><Link to={`/post/edit/${post.id}`}>edit</Link></div>
              <div className="col-1"><Link to={`/post/delete/${post.id}`}>remove</Link></div>
            </div>
          </div>
          <div className="w-100" />
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
