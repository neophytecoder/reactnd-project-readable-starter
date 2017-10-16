import React, { Component } from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { setPosts } from '../ListPosts/actions'
import * as ForumAPI from '../utils/ForumAPI'
import ListPostsComponent from '../ListPosts'
import SortedCategoryComponent from './SortedCategory'

class CategoryComponent extends Component {

  downloadPosts = (categoryName) => {
    ForumAPI.getAllPostsWithCategory(categoryName)
        .then(posts => {
          console.log("Category finished", posts);
          this.props.setPosts(posts);
        });
  }

  render() {
    const {match} = this.props;
    return (
      <div>
        <ul>
          <li><Link to={`${match.url}/hot`}>Hot</Link></li>
          <li><Link to={`${match.url}/new`}>New</Link></li>
        </ul>
        <br/>
        Category: {match.params.categoryName}
        <Route exact path={match.url} component={ListPostsComponent} />
        <Route path={`${match.url}/:sort`} component={SortedCategoryComponent} />
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    const currentMatch = this.props.match;
    const nextMatch = nextProps.match;
    if (nextMatch.params.categoryName !== currentMatch.params.categoryName) {
      this.downloadPosts(nextMatch.params.categoryName);
    }
  }

  componentDidMount() {
    console.log("componentDidMount");
    const { match } = this.props;
    this.downloadPosts(match.params.categoryName);
  }
}


const mapStateToProps = (state, ownProps) => ({...ownProps})

const mapDispatchToProps = (dispatch) => ({
  setPosts: (posts) => dispatch(setPosts(posts)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryComponent);
