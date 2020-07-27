import { combineReducers } from 'redux';

import {
  INITIAL_REQUEST,
  RECEIVE_INITIAL_POSTS,
  GENRES_REQUEST,
  GENRES_RECEIVE,
  RECEIVE_MOVIES_PAGE,
  REQUEST_MOVIES_PAGE,
} from '../actions';

const initialPosts = (state = {}, action) => {
  // console.log(state.items);
  const currItems = state.items ? state.items.slice() : [];
  // const currItems = state.items.slice();

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
    case REQUEST_MOVIES_PAGE:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_MOVIES_PAGE:
      return {
        ...state,
        isFetching: false,
        items: currItems.concat(action.posts),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  initialPosts,
});

export default rootReducer;
