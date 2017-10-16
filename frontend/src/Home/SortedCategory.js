import React, { Component } from 'react'
import ListPostsComponent from '../ListPosts'

class SortedCategoryComponent extends Component {
  render() {
    const {match} = this.props;
    return (
      <div>
        Sort: {match.params.sort}
        <ListPostsComponent sort={match.params.sort} />
      </div>
    );
  }
}

export default SortedCategoryComponent;
