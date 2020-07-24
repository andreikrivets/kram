export const INITIAL_REQUEST = 'INITIAL_REQUEST';
export const RECEIVE_INITIAL_POSTS = 'RECEIVE_INITIAL_POSTS';

const API_KEY = 'bcfc6e741d87e6212b541081dfa14af7';

export const initialRequest = () => ({
  type: INITIAL_REQUEST,
});

export const receiveInitialPosts = json => ({
  type: RECEIVE_INITIAL_POSTS,
  posts: json.results,
});

const fetchInitialMovies = () => dispatch => {
  dispatch(initialRequest());
  return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(json => dispatch(receiveInitialPosts(json)));
};

const shouldFetch = state => {
  if (!state.initialPosts.items) return true;
  if (state.initialPosts.isFetching) return false;
  return false;
};

// eslint-disable-next-line consistent-return
export const fetchInitial = () => (dispatch, getState) => {
  if (shouldFetch(getState())) return dispatch(fetchInitialMovies());
};
