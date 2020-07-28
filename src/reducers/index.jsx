import { combineReducers } from 'redux';

import {
  GENRES_REQUEST,
  GENRES_RECEIVE,
  RECEIVE_MOVIES_PAGE,
  REQUEST_MOVIES_PAGE,
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
        page: action.page,
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
  data,
});

export default rootReducer;
