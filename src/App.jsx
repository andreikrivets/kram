import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, CircularProgress } from '@material-ui/core';

import Header from './components/header';
import Search from './components/search';
import MovieCard from './components/movieCard';

import { fetchInitial } from './actions';

const App = props => {
  const { dispatch, items, genres } = props;

  useEffect(() => {
    dispatch(fetchInitial());
  }, []);

  return (
    <Container
      maxWidth="md"
      variant="outlined"
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Header />
      <Search />
      {!items ? (
        <CircularProgress style={{ marginTop: '15%' }} />
      ) : (
        items.map(el => <MovieCard data={el} genres={genres} />)
      )}
    </Container>
  );
};

const mapStateToProps = state => {
  const { initialPosts } = state;
  const { isFetching, items, genres } = initialPosts || {
    isFetching: true,
    items: [],
    genres: [],
  };

  return {
    items,
    genres,
    isFetching,
  };
};

export default connect(mapStateToProps)(App);
