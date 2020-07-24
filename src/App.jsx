import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, CircularProgress } from '@material-ui/core';

import Header from './components/header';
import Search from './components/search';
import MovieCard from './components/movieCard';

import { fetchInitial } from './actions';

const App = props => {
  const { dispatch, items } = props;
  useEffect(() => {
    async function fetchData() {
      const resp = await fetchInitial();
      dispatch(resp);
    }
    fetchData();
  });
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
        items.map(el => <MovieCard data={el} />)
      )}
    </Container>
  );
};

const mapStateToProps = state => {
  const { initialPosts } = state;
  const { isFetching, items } = initialPosts || {
    isFetching: true,
    items: [],
  };

  return {
    items,
    isFetching,
  };
};

export default connect(mapStateToProps)(App);
