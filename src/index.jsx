import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './App';
import reducer from './reducers';
import MoviePage from './pages/moviePage';

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

const MainPage = () => <App />;

render(
  <Router history={createBrowserHistory()}>
    <Provider store={store}>
      <Switch>
        <Route path="/" component={MainPage} />
        <Route path="/movie" component={() => <MoviePage />} />
      </Switch>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
