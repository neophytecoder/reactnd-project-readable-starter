import React, {Component} from 'react'
import { connect } from 'react-redux'

import CommentComponent from './index'
import { EditCommentContainerComponent } from './FormContainer'

class EditableCommentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }

  editComment = () => {
    this.setState({
      isEditing: true
    });
  }


  render() {
    console.log("EditableCommentComponent", this.props);
    if (this.state.isEditing) {
      return (
        <EditCommentContainerComponent {...this.props.post} />
      )
    }

    return (
      <div>
        <CommentComponent {...this.props} editComment={this.editComment}/>
      </div>
    )


  }

  componentDidMount() {

  }
}

export default EditableCommentComponent;
