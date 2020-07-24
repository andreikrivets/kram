import { combineReducers } from 'redux';

import { INITIAL_REQUEST, RECEIVE_INITIAL_POSTS } from '../actions';

// const movies = (
//   state = {
//     isFetching: false,
//     items: [],
//   },
//   action
// ) => {
//   switch (action.type) {
//     case INITIAL_REQUEST:
//       console.log('initial req');
//       return {
//         ...state,
//         isFetching: true,
//       };
//     case RECEIVE_INITIAL_POSTS:
//       console.log('post');
//       return {
//         ...state,
//         isFetching: false,
//         items: action.posts,
//       };
//     default:
//       return state;
//   }
// };

const initialPosts = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_INITIAL_POSTS:
      return {
        ...state,
        items: action.posts,
        isFetching: false,
      };
    case INITIAL_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  initialPosts,
});

export default rootReducer;
