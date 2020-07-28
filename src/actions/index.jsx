export const GENRES_REQUEST = 'GENRES_REQUEST';
export const GENRES_RECEIVE = 'GENRES_RECEIVE';
export const REQUEST_MOVIES_PAGE = 'REQUEST_MOVIES_PAGE';
export const RECEIVE_MOVIES_PAGE = 'RECEIVE_MOVIES_PAGE';

const URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'bcfc6e741d87e6212b541081dfa14af7';

export const requestMovies = page => ({
  type: REQUEST_MOVIES_PAGE,
  page,
});

export const recieveMovies = json => ({
  type: RECEIVE_MOVIES_PAGE,
  posts: json.results,
});

export const recieveGenresList = json => ({
  type: GENRES_RECEIVE,
  genres: json.genres,
});

const fetchMovies = page => dispatch => {
  dispatch(requestMovies(page));
  return fetch(`${URL}trending/movie/week?api_key=${API_KEY}&page=${page}`)
    .then(response => response.json())
    .then(json => dispatch(recieveMovies(json)));
};

export const fetchGenresList = () => dispatch => {
  dispatch({
    type: GENRES_REQUEST,
  });
  return fetch(`${URL}genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(json => dispatch(recieveGenresList(json)));
};

const fetchSearchQuery = text => dispatch => {
  dispatch(recieveMovies());
  return fetch(`${URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${text}`)
    .then(response => response.json())
    .then(json => dispatch(recieveMovies(json)));
};

const shouldFetch = state => {
  if (!state.data.items) return true;
  if (state.data.isFetching) return false;
  return false;
};

// eslint-disable-next-line consistent-return
export const fetchInitial = () => (dispatch, getState) => {
  if (shouldFetch(getState())) {
    dispatch(fetchGenresList());
    return dispatch(fetchMovies(1));
  }
};

export const fetchMore = page => (dispatch, getState) =>
  !getState().data.isFetching ? dispatch(fetchMovies(page)) : null;

export const search = text => dispatch => dispatch(fetchSearchQuery(text));
