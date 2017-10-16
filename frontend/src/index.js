import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'
import {BrowserRouter, Route} from 'react-router-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import {categoryReducers} from "./Nav/reducers"
import {postReducers} from "./ListPosts/reducers"
import {CATEGORIES, POSTS} from './stateConstants'
import App from './App/App'

const store = createStore(combineReducers({[CATEGORIES]: categoryReducers, [POSTS]: postReducers}));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
