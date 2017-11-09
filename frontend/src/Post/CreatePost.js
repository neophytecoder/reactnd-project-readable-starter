import React, {Component} from 'react'
import { connect } from 'react-redux'

import * as Utils from '../utils'
import * as ForumAPI from '../utils/ForumAPI'
import FormComponent from '../Post/FormComponent'
import { addPost } from './actions'

class CreatePostComponent extends Component {
  constructor(props) {
    super(props);
    this.post = {title: "", body: "", author: "", category: ""};
    this.enabled = {author: true, category: true};
  }

  submitPost = (formValues) => (event) => {
    event.preventDefault();
    const post = {
      id: Utils.makeid(20),
      ...formValues,
      timestamp: Date.now()
    };
    console.log(post);
    ForumAPI.post(post).then((data) => {
      console.log(data);
      this.props.addPost(data);
      this.props.history.push('/');
    });
  }

  render() {
    return <FormComponent post={this.post} handleSubmit={this.submitPost} enabled={this.enabled} />
  }
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(addPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostComponent);
