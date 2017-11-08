import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addComments } from './actions'
import * as ForumAPI from '../utils/ForumAPI'
import { makeid } from '../utils'

class CommentFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  onChange = (field) => (event) => {
    this.setState({[field]: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state)(event);
    this.setState({
      body: "",
      author: ""
    });
  }

  render() {
    return (
      <div className="row">
          <div className="col-7 form-group">
            <label>Body</label>
            <textarea className="form-control" aria-describedby="Body" rows="5"
              placeholder="Enter comment" onChange={this.onChange("body")}
              value={this.state.body} />
          </div>
          <div className="w-100" />
          <div className="col-7 form-group">
              <label>Author</label>
              <input className="form-control"
                aria-describedby="Author"
                placeholder="Enter author"
                onChange={this.onChange("author")}
                  value={this.state.author} />
          </div>
          <div className="w-100" />
          <div className="col-2 form-group">
            <button className="btn btn-primary form-control" type="submit" onClick={this.onSubmit} >
              Submit
            </button>
          </div>
      </div>
    );
  }
}


export default CommentFormComponent;
