import React, { Component } from 'react'
import { Switch, Route } from 'react-router'

import CreatePostComponent from './CreatePost'
import EditPostComponent from './EditPost'
import DeletePostComponent from './DeletePost'
import CheckedPostDetailContainerComponent from './CheckedPostDetailContainerComponent'

class PostContainerComponent extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/post/create" component={CreatePostComponent} />
          <Route path="/post/edit/:id" component={EditPostComponent} />
          <Route path="/post/delete/:id" component={DeletePostComponent} />
          <Route path="/post/:id" component={CheckedPostDetailContainerComponent} />
        </Switch>
      </div>
    )
  }
}

export default PostContainerComponent;
