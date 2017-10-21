import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListComponent from "../UI/List"
import PostComponent from "../Post/PostComponent"

class HomeComponent extends Component {
  render() {
    const ListPostsComponent = ListComponent(PostComponent, this.props.posts);
    return (
        <ListPostsComponent />
    )
  }
}


const mapStateToProps = (state, props) => {
  return {posts: state.posts};
}

const mapDispatchToProps = (dispatch) => {}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
