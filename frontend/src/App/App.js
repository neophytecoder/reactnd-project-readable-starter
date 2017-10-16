import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NavComponent from '../Nav';
import HomeComponent from '../Home'
import CategoryComponent from '../Home/Category'

class App extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <NavComponent />
        <Route exact path={match.url} component={HomeComponent} />
        <Route path="/category/:categoryName" component={CategoryComponent} />
      </div>
    );
  }
}

export default App;
