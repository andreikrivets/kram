import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import uniqid from 'uniqid';
import { Card, Typography } from '@material-ui/core';

import { fetchMovieInfo } from '../actions';
import Header from '../components/header';

const MoviePage = props => {
  const { id, title, dispatch, movieInfo, gen } = props;
  if (!id) return <Redirect to="/" />;
  useEffect(() => {
    dispatch(fetchMovieInfo(id));
  }, []);

  if (!movieInfo) return null;
  const IMG = `https://image.tmdb.org/t/p/w400${movieInfo.poster_path}`;
  const usd = `${movieInfo.budget}`
    .split('')
    .reverse()
    .map((el, i) => (i % 3 === 0 ? `${el} ` : el))
    .reverse()
    .join('');
  console.log(props);
  return (
    <>
      <Header />
      <Card
        maxWidth="md"
        variant="outlined"
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '2% 5%',
          padding: '2% 5%',
        }}
      >
        <Typography variant="h3">
          <a href={movieInfo.homepage} style={{ textDecoration: 'none', color: 'inherit' }}>
            {title}
          </a>
        </Typography>
        <Typography variant="h5">{movieInfo.original_titile || ''}</Typography>
        <img src={IMG} alt="img" style={{ margin: '5%', borderRadius: '5px' }} />
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'baseline',
          }}
        >
          <span role="img" aria-label="img">
            🏷️
          </span>
          <Typography variant="body2">{movieInfo.tagline}</Typography>
        </div>
        <Typography
          variant="body1"
          style={{ textAlign: 'justify', marginTop: '5%', marginBottom: '10%' }}
        >
          {movieInfo.overview}
        </Typography>
        <div style={{ display: 'flex', marginTop: '1%' }}>
          <span role="img" aria-label="img">
            💲
          </span>
          <Typography>{`${usd}`}</Typography>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '2%',
            fontStyle: 'italic',
          }}
        >
          {gen.map(el => (
            <Typography variant="body2" color="primary" key={uniqid()}>
              {el}
            </Typography>
          ))}
        </div>
      </Card>
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
