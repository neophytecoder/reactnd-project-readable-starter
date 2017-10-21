import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'

import { CATEGORIES } from '../stateConstants'
import { addPost } from '../Post/actions'
import * as ForumAPI from '../utils/ForumAPI'
import ListComponent from "../UI/List"
import SortedListComponent from "../UI/SortedList"
import PostComponent from "../Post/PostComponent"
import CategoryComponent from "./Category"

class HomeContainerComponent extends Component {
  render() {
    console.log("HomeContainerComponent", this.props);
    const SortedListPostComponent = SortedListComponent(PostComponent, this.props.posts);
    const ListPostComponent = ListComponent(PostComponent, this.props.posts);
    const { match } = this.props;
    return (
      <div>
        <Link to="/post/create">Submit a new post</Link>
        <Switch>
          <Route path="/category/:category" component={CategoryComponent} />
          <Route path="/:sort" component={SortedListPostComponent} />
          <Route exact path={match.url} component={ListPostComponent} />
        </Switch>
      </div>
    );
  }

  componentDidMount() {
    ForumAPI.getAllPosts()
        .then(posts => {
          this.props.addPosts(posts);
        });
  }
}

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
  ...ownProps,
});

const mapDispatchToProps = (dispatch) => ({
  addPosts: (posts) => {
    posts.map(post => {
      dispatch(addPost(post))
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainerComponent);
