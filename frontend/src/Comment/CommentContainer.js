import React, {Component} from 'react'
import {Switch, Route} from 'react-router'

import EditCommentComponent from 'EditComment'
import DeleteCommentComponent from 'DeleteComment'

class CommentContainerComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route path="/comment/:id/edit" component={EditCommentComponent} />
        <Route path="/comment/:id/delete" component={DeleteCommentComponent} />
      </Switch>
    )
  }
}
