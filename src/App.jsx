import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';

import Header from './components/header';
import Search from './components/search';

import { fetchInitial } from './actions';

const App = props => {
  const { dispatch } = props;
  useEffect(() => {
    async function fetchData() {
      const resp = await fetchInitial();
      dispatch(resp);
    }
    fetchData();
  });

  return (
    <Container maxWidth="md" style={{ textAlign: 'center' }}>
      <Header />
      <Search />
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
