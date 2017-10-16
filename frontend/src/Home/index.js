import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CATEGORIES } from '../stateConstants'
import { setPosts } from '../ListPosts/actions'
import * as ForumAPI from '../utils/ForumAPI'
import ListPostsComponent from '../ListPosts'

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <ListPostsComponent />
      </div>
    );
  }

  componentDidMount() {
    ForumAPI.getAllPosts()
        .then(posts => {
          console.log("Home finished", posts);
          this.props.setPosts(posts);
        });
  }
}


const mapStateToProps = (state, ownProps) => ({
  categories: state[CATEGORIES],
  ...ownProps
})

const mapDispatchToProps = (dispatch) => ({
  setPosts: (posts) => dispatch(setPosts(posts)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
