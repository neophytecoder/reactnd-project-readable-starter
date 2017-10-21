import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ListComponent from "../UI/List"
import SortedListComponent from "../UI/SortedList"
import PostComponent from "../Post/PostComponent"

class CategoryComponent extends Component {
  render() {
    const { match } = this.props;
    const filteredPosts = this.props.posts.filter((post) => (
      post.category === match.params.category
    ));
    const SortedListPostComponent = SortedListComponent(PostComponent, filteredPosts);
    const ListPostComponent = ListComponent(PostComponent, filteredPosts);
    return (
      <Switch>
        <Route path={`${match.url}/:sort`} component={SortedListPostComponent} />
        <Route exact path={match.url} component={ListPostComponent} />
      </Switch>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
  ...ownProps,
});

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryComponent);
