import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';

import { fetchMovieInfo } from '../actions';
import Header from '../components/header';

const MoviePage = props => {
  const { id, title, dispatch, movieInfo } = props;
  if (!id) return <Redirect to="/" />;
  useEffect(() => {
    dispatch(fetchMovieInfo(id));
  }, []);

  if (!movieInfo) return null;

  return (
    <>
      <Header />
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
        <Typography variant="h3">{title}</Typography>
        <Typography variant="h5">{movieInfo.original_titile || ''}</Typography>
        <Typography variant="caption">{movieInfo.tagline}</Typography>
        <Typography variant="body2">{movieInfo.overview}</Typography>
        {/* <input type="button" onClick={() => dispatch(fetchMovieInfo(id))} /> */}
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  const { info } = state;
  const { movieInfo } = info || {
    movieInfo: [],
  };
  return {
    movieInfo,
  };
};

export default connect(mapStateToProps)(MoviePage);
