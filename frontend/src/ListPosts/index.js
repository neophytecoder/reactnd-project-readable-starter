import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { POSTS } from '../stateConstants';

class ListPostsComponent extends Component {
  render() {
      console.log("render", this.props);
      const {sort, posts} = this.props;
      let sortedPosts;

      if (sort === 'new') {
        sortedPosts = posts.sort((postOne, postTwo) => (postTwo.timestamp - postOne.timestamp))
      } else {
        sortedPosts = posts.sort((postOne, postTwo) => (postTwo.voteScore - postOne.voteScore))
      }

      return (
        <div>
          <ol>
            {
              sortedPosts.map((post) => (
                <li key={post.id}>
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </li>
              ))
            }
          </ol>
        </div>
      )
  }
}

const mapStateToProps = (state, props) => ({
  posts: state[POSTS].filter(post => !post.deleted),
  ...props
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ListPostsComponent)
