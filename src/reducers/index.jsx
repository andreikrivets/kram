import { combineReducers } from 'redux';

import {
  GENRES_REQUEST,
  GENRES_RECEIVE,
  RECEIVE_MOVIES_PAGE,
  REQUEST_MOVIES_PAGE,
  RECEIVE_SEARCH_RESULTS,
} from '../actions';

const data = (state = {}, action) => {
  const currItems = state.items ? state.items.slice() : [];
  switch (action.type) {
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
        page: action.page + 1,
      };
    case RECEIVE_MOVIES_PAGE:
      return {
        ...state,
        isFetching: false,
        items: currItems.concat(action.posts),
      };
    case RECEIVE_SEARCH_RESULTS:
      return {
        ...state,
        isFetching: false,
        isSearch: true,
        items: action.posts,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data,
});

export default rootReducer;
