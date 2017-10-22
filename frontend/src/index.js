import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'
import {BrowserRouter, Route} from 'react-router-dom'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import {categoryReducers} from "./Category/reducers"
import {postReducers} from "./Post/reducers"
import {commentReducers} from './Comment/reducers'
import {CATEGORIES, POSTS, COMMENTS} from './stateConstants'
import App from './App/App'

const rootReducer = combineReducers({
  [CATEGORIES]: categoryReducers,
  [POSTS]: postReducers,
  [COMMENTS]: commentReducers
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
