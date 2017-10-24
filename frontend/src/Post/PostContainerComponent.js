import React, { Component } from 'react'
import { Switch, Route } from 'react-router'

import CreatePostComponent from './CreatePost'
import PostDetailContainerComponent from './PostDetailContainerComponent'

class PostContainerComponent extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/post/create" component={CreatePostComponent} />
          <Route path="/post/edit/:id" component={CreatePostComponent} />
          <Route path="/post/delete/:id" component={CreatePostComponent} />
          <Route path="/post/:id" component={PostDetailContainerComponent} />
        </Switch>
      </div>
    )
  }
}

export default PostContainerComponent;
