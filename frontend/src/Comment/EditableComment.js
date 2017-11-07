import React, {Component} from 'react'
import { connect } from 'react-redux'

import CommentComponent from './index'

class EditableCommentComponent extends Component {
  render() {
    return (
      <div>
        <CommentComponent {...this.props}/>
      </div>
    )


  }

  componentDidMount() {

  }
}
