import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as Utils from '../utils'
import * as ForumAPI from '../utils/ForumAPI'

class PostFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      author: "",
      category: "",
      ...props
    }
  }

  submitPost = (event) => {
    event.preventDefault();
    const post = {
      id: Utils.makeid(20),
      ...this.state,
      timestamp: Date.now()
    }
    ForumAPI.post(post).then((data) => {
      console.log(data);
      this.props.history.push('/');
    });
  }

  onChange = (key) => (event) => {
      const { value } = event.target;
      this.setState({[key]: value});
    }

  render() {
    return (
      <div>
        Create a post;
        <form>
          <input value={this.state.title} placeholder="title" onChange={this.onChange("title")}/> <br/>
          <input value={this.state.body} placeholder="body" onChange={this.onChange("body")}/> <br/>
          <input value={this.state.author} placeholder="author" onChange={this.onChange("author")}/> <br/>
          <input value={this.state.category} placeholder="category" onChange={this.onChange("category")}/> <br/>
          <input type="submit" value="submit" onClick={this.submitPost}/>
        </form>
      </div>
    )
  }
}

//export default connect(()=>({}), ()=>({}))(CreatePostComponent);
export default withRouter(CreatePostComponent);
