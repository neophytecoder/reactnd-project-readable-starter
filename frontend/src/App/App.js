import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'
import NavComponent from '../Nav'
import HomeContainerComponent from '../Home'
// import CategoryComponent from '../Home/Category'
// import PostComponent from '../Post'
// import CreatePostComponent from '../Home/CreatePost'

class App extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <NavComponent />
        <Switch>
          <Route path="/" component={HomeContainerComponent} />
        </Switch>
      </div>
    );
  }
}

// <Switch>
//
//   <Route path="/category/:categoryName" component={CategoryComponent} />
// </Switch>
//<Route path="/post" component={PostComponent} />

export default App;
