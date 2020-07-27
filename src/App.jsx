import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import uniqid from 'uniqid';
import { Container, CircularProgress } from '@material-ui/core';

import Header from './components/header';
import Search from './components/search';
import MovieCard from './components/movieCard';

import { fetchInitial, fetchMore } from './actions';

const App = props => {
  const { dispatch, items, genres } = props;

  useEffect(() => {
    dispatch(fetchInitial());
  }, []);

  const handleFetchMore = page => dispatch(fetchMore(page));

  if (!items) return null;
  const infiniteScrollItems = [];
  items.map(el => infiniteScrollItems.push(<MovieCard data={el} genres={genres} key={uniqid()} />));
  console.log(infiniteScrollItems);
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
      <input type="button" value="more" onClick={handleFetchMore} />
      <Search />
      <InfiniteScroll
        pageStart={1}
        loadMore={handleFetchMore}
        hasMore={true || false}
        loader={<CircularProgress style={{ marginTop: '15%' }} key={uniqid()} />}
      >
        {infiniteScrollItems}
      </InfiniteScroll>
    </Container>
  );
};

const mapStateToProps = state => {
  const { initialPosts } = state;
  const { isFetching, items, genres, page } = initialPosts || {
    isFetching: true,
    items: [],
    genres: [],
    page: 1,
  };

  return {
    page,
    items,
    genres,
    isFetching,
  };
};

export default connect(mapStateToProps)(App);
