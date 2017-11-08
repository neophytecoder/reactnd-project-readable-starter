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

class ListPostContainerComponent extends Component {
  render() {
    console.log("HomeContainerComponent", this.props);
    const SortedListPostComponent = SortedListComponent(PostComponent, this.props.posts);
    const ListPostComponent = SortedListComponent(PostComponent, this.props.posts, "hot");
    const { match } = this.props;
    return (
      <div className="row" style={{marginTop: '1em'}}>
        <div className="col-10">

          <div className="dropdown show" style={{marginBottom: "1em"}}>
            <a className="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sort by
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link className="dropdown-item" to={`/hot`}>Hot</Link>
              <Link className="dropdown-item" to={`/new`}>New</Link>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListPostContainerComponent);
