import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'

import { POSTS } from '../stateConstants'
import * as ForumAPI from '../utils/ForumAPI'
import CommentsComponent from './Comments'

class PostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {post: {}};
  }

  obtainPost = (props) => {
    const { match } = props;
    if (props.post.length === 0) {
      ForumAPI.getPost(match.params.id)
        .then((post) => {
          this.setState({post})
        })
    } else {
      this.setState({post: props.post[0]});
    }
  }

  timestampToDate = (timestamp) => {
    var t = new Date(timestamp);
    var date = ("0"+t.getDate()).slice(-2);
    var month = ("0"+(1+t.getMonth())).slice(-2);
    return `${date}-${month}-${t.getFullYear()}`;
  }

  render() {
    const { match} = this.props;
    const { post } = this.state;
    console.log(match.params.id, post);
    return (
      <div>
        Post: {post.id} <br/>
        Title: {post.title} <br/>
        Body: {post.body} <br/>
        Author: {post.author} <br/>
        timestamp: {this.timestampToDate(post.timestamp)} <br/>
        vote score: {post.voteScore} <br/>

        <CommentsComponent id={post.id} />
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    this.obtainPost(nextProps);
  }

  componentDidMount() {
    this.obtainPost(this.props);
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state[POSTS].filter((post) => ownProps.match.params.id === post.id)
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent);
