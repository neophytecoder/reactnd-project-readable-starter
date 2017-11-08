import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'
import NavComponent from '../Nav'
import HomeContainerComponent from '../Home'


class App extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
          <NavComponent />
          <main className='container'>
            <Switch>
              <Route path="/" component={HomeContainerComponent} />
            </Switch>
          </main>
      </div>
    );
  }
}


export default App;
