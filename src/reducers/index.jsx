import { combineReducers } from 'redux';

import { INITIAL_REQUEST, RECEIVE_INITIAL_POSTS, GENRES_REQUEST, GENRES_RECEIVE } from '../actions';

const initialPosts = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_INITIAL_POSTS:
      return {
        ...state,
        isFetching: false,
        items: action.posts,
      };
    case INITIAL_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GENRES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GENRES_RECEIVE:
      return {
        ...state,
        isFetching: false,
        genres: action.genres,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  initialPosts,
});

export default rootReducer;
