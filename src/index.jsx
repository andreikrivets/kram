import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';

import reducer from './reducers';
import App from './App';

const history = createBrowserHistory();

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
const store = createStore(
  reducer,
  /* initialState, */
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const Container = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(
  <Router history={history}>
    <Route path="/" component={Container} />
  </Router>,
  document.getElementById('root')
);
