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

  render() {
    return (
      <div>
          <div>
              Body: <input onChange={this.onChange("body")}
                  value={this.state.body} />
          </div>
          <div>
              Author: <input onChange={this.onChange("author")}
                  value={this.state.author} />
          </div>
        <div><input type="submit" onClick={this.props.onSubmit(this.state)} /></div>
      </div>
    );
  }
}


export default CommentFormComponent;
