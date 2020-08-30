import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Link, Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';

import App from './App';
import reducer from './reducers';
import MoviePage from './pages/moviePage';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  /* initialState, */
  composeEnhancers(applyMiddleware(...middleware))
);

const Nav = () => (
  <>
    <Link to="/"> main </Link>
    <Link to="/movie"> movie </Link>
  </>
);

const Movie = props => {
  const { location } = props;
  const { id, title, gen } = location;
  return <MoviePage id={id} title={title} gen={gen} />;
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={() => <App />} />
        <Route path="/movie" component={Movie} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
