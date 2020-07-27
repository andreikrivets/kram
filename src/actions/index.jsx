export const INITIAL_REQUEST = 'INITIAL_REQUEST';
export const RECEIVE_INITIAL_POSTS = 'RECEIVE_INITIAL_POSTS';
export const GENRES_REQUEST = 'GENRES_REQUEST';
export const GENRES_RECEIVE = 'GENRES_RECEIVE';
export const REQUEST_MOVIES_PAGE = 'REQUEST_MOVIES_PAGE';
export const RECEIVE_MOVIES_PAGE = 'RECEIVE_MOVIES_PAGE';

const API_KEY = 'bcfc6e741d87e6212b541081dfa14af7';

export const initialRequest = () => ({
  type: INITIAL_REQUEST,
});

export const requestMovies = page => ({
  type: REQUEST_MOVIES_PAGE,
  page,
});

export const receiveInitialPosts = json => ({
  type: RECEIVE_INITIAL_POSTS,
  posts: json.results,
});

export const recieveMovies = json => ({
  type: RECEIVE_MOVIES_PAGE,
  posts: json.results,
});

export const recieveGenresList = json => ({
  type: GENRES_RECEIVE,
  genres: json.genres,
});

const fetchInitialMovies = () => dispatch => {
  dispatch(initialRequest());
  return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(json => dispatch(receiveInitialPosts(json)));
};

const fetchMovies = page => dispatch => {
  dispatch(requestMovies(page));
  return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page}`)
    .then(response => response.json())
    .then(json => dispatch(recieveMovies(json)));
};

export const fetchGenresList = () => dispatch => {
  dispatch({
    type: GENRES_REQUEST,
  });
  return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(json => dispatch(recieveGenresList(json)));
};

const shouldFetch = state => {
  if (!state.initialPosts.items) return true;
  if (state.initialPosts.isFetching) return false;
  return false;
};

// eslint-disable-next-line consistent-return
export const fetchInitial = () => (dispatch, getState) => {
  if (shouldFetch(getState())) {
    dispatch(fetchGenresList());
    return dispatch(fetchInitialMovies());
  }
};

export const fetchMore = page => dispatch => dispatch(fetchMovies(page));
