import React, {Component} from 'react'
import { connect } from 'react-redux'

import * as ForumAPI from '../utils/ForumAPI'
import { deletePost } from './actions'

class DeletePostComponent extends Component {
  render() {
    return <div></div>
  }

  componentDidMount() {
    const postId = this.props.match.params.id;
    ForumAPI.deletePost(postId)
      .then(data => {
        this.props.delete(postId);
        this.props.history.push("/");
      });
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
  delete: (postId) => dispatch(deletePost(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeletePostComponent);
