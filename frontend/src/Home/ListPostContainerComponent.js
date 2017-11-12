import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'

import { CATEGORIES } from '../stateConstants'
import { addPost } from '../Post/actions'
import { addComments } from '../Comment/actions'
import * as ForumAPI from '../utils/ForumAPI'
import ListComponent from "../UI/List"
import SortedListComponent from "../UI/SortedList"
import PostComponent from "../Post/PostComponent"
import CategoryComponent from "./Category"

class ListPostContainerComponent extends Component {
  render() {
    console.log("HomeContainerComponent", this.props);
    const SortedListPostComponent = SortedListComponent(PostComponent, this.props.posts);
    const ListPostComponent = SortedListComponent(PostComponent, this.props.posts, "hot");
    const { match, location } = this.props;
    return (
      <div className="row" style={{marginTop: '1em'}}>
        <div className="col-10">

          <div className="dropdown show" style={{marginBottom: "1em"}}>
            <a className="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sort by
            </a>

            <Switch>
              <Route path="/category/:category" component={SortByComponent} />
              <Route path={match.url} component={SortByComponent} />
            </Switch>

          </div>

          <Switch>
            <Route path="/category/:category" component={CategoryComponent} />
            <Route path="/:sort" component={SortedListPostComponent} />
            <Route exact path={match.url} component={ListPostComponent} />
          </Switch>
        </div>
        <div className="col-2">
          <Link className="btn btn-info" to="/post/create">Submit a new post</Link>
        </div>
      </div>
    );
  }

  componentDidMount() {
    ForumAPI.getAllPosts()
        .then(posts => {
          this.props.addPosts(posts);
          posts.map(post => {
            ForumAPI.getAllComments(post.id).then(comments => this.props.addComments(comments))
          });
        });
  }
}

class SortByComponent extends Component {
  render() {
    return(
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <Link className="dropdown-item" to={`${this.props.match.url}/hot`}>Hot</Link>
        <Link className="dropdown-item" to={`${this.props.match.url}/new`}>New</Link>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts.map(post => {
    const numberComments = state.comments.filter(comment => comment.parentId === post.id).length;
    return {...post, numberComments};
  }),
  ...ownProps,
});

const mapDispatchToProps = (dispatch) => ({
  addPosts: (posts) => {
    posts.map(post => {
      dispatch(addPost(post))
    })
  },
  addComments: (comments) => dispatch(addComments(comments))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPostContainerComponent);
