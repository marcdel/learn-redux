import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import routeReducer from './reducers/index';

import comments from  './data/comments';
import posts from  './data/posts';

const defaultState = {
  posts,
  comments
};

const store = createStore(routeReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot){
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
