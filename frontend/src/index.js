import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'
import {BrowserRouter, Route} from 'react-router-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import {categoryReducers} from "./Category/reducers"
import {postReducers} from "./Post/reducers"
import {commentReducers} from './Comment/reducers'
import {CATEGORIES, POSTS, COMMENTS} from './stateConstants'
import App from './App/App'

const store = createStore(
  combineReducers({
    [CATEGORIES]: categoryReducers,
    [POSTS]: postReducers,
    [COMMENTS]: commentReducers,
  }, ));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
