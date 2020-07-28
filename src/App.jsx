import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import uniqid from 'uniqid';
import { Container, CircularProgress } from '@material-ui/core';

import Header from './components/header';
import Search from './components/search';
import MovieCard from './components/movieCard';

import { fetchInitial, fetchMore, search } from './actions';

const App = props => {
  const { dispatch, items, genres } = props;

  useEffect(() => {
    dispatch(fetchInitial());
  }, []);

  const handleFetchMore = page => dispatch(fetchMore(page));
  const handleSearchQuery = text => dispatch(search(text));

  const infiniteScrollItems = [];
  if (items) {
    items.map(el =>
      infiniteScrollItems.push(<MovieCard data={el} genres={genres} key={uniqid()} />)
    );
  } else return null;

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
      <Search setSearchQuery={handleSearchQuery} />
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
  const { isFetching, items, genres, page, query } = initialPosts || {
    isFetching: true,
    items: [],
    genres: [],
    page: 1,
    query: '',
  };

  return {
    page,
    items,
    genres,
    query,
    isFetching,
  };
};

export default connect(mapStateToProps)(App);
