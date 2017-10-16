import React, {Component} from 'react';

class CreatePost extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text"/>
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default CreatePost;
