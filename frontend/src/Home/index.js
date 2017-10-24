import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'

import ListPostContainerComponent from './ListPostContainerComponent'
import PostContainerComponent from '../Post'

class HomeContainerComponent extends Component {
  render() {
    console.log("HomeContainerComponent", this.props);
    const { match } = this.props;
    return (
      <div>
        <Switch>
          <Route path="/post" component={PostContainerComponent} />
          <Route path={match.url} component={ListPostContainerComponent} />
        </Switch>
      </div>
    );
  }
}


export default HomeContainerComponent;
