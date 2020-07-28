import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import uniqid from 'uniqid';
import { Container, CircularProgress } from '@material-ui/core';

import Header from './components/header';
import Search from './components/search';
import MovieCard from './components/movieCard';

import { fetchInitial, fetchMore, search } from './actions';

const App = props => {
  const { dispatch, items, genres, page } = props;
  const [query, setQuery] = useState('');
  useEffect(() => {
    dispatch(fetchInitial());
  }, []);

  const infiniteScrollItems = [];
  const handleFetchMore = () => {
    dispatch(fetchMore(page, query));
  };
  const handleSearchQuery = text => {
    setQuery(text);
    dispatch(search(text));
  };

  if (items) {
    items.map(el =>
      infiniteScrollItems.push(<MovieCard data={el} genres={genres} key={uniqid()} />)
    );
  } else return null;

  const InfScroll = () => (
    <InfiniteScroll
      pageStart={page}
      loadMore={handleFetchMore}
      hasMore={true || false}
      loader={<CircularProgress style={{ marginTop: '15%' }} key={uniqid()} />}
      threshold={2500}
    >
      {infiniteScrollItems}
    </InfiniteScroll>
  );

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
      <InfScroll />
    </Container>
  );
};

const mapStateToProps = state => {
  const { data } = state;
  const { isFetching, isSearch, items, genres, page, query } = data || {
    page: 0,
    query: '',
    items: [],
    genres: [],
    isFetching: true,
    isSearch: true,
  };

  return {
    page,
    items,
    genres,
    query,
    isFetching,
    isSearch,
  };
};

export default connect(mapStateToProps)(App);
