import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import uniqid from 'uniqid';
import { Card, Typography } from '@material-ui/core';

import { fetchMovieInfo } from '../actions';
import Header from '../components/header';

import useStyles from './moviePageStyle';

const MoviePage = props => {
  const { id, title, dispatch, movieInfo, gen } = props;
  const classes = useStyles();
  if (!id) return <Redirect to="/" />;
  useEffect(() => {
    dispatch(fetchMovieInfo(id));
  }, []);

  if (!movieInfo) return null;
  const IMG = `https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`;
  const usd = `${movieInfo.budget}`
    .split('')
    .reverse()
    .map((el, i) => (i % 3 === 0 ? `${el} ` : el))
    .reverse()
    .join('');

  return (
    <>
      <Header />
      <Card maxwidth="md" variant="outlined" className={classes.movieCard}>
        <Typography variant="h3" color="primary">
          <a href={movieInfo.homepage} className={classes.headerLink}>
            {title}
          </a>
        </Typography>
        <Typography variant="h5">{movieInfo.original_titile || ''}</Typography>
        <img src={IMG} alt="img" className={classes.poster} />
        <div className={classes.tagline}>
          <span role="img" aria-label="img">
            🏷️
          </span>
          <Typography variant="body2">{movieInfo.tagline}</Typography>
        </div>
        <Typography variant="body1" className={classes.descr}>
          {movieInfo.overview}
        </Typography>
        <div className={classes.dollar}>
          <span role="img" aria-label="img">
            💲
          </span>
          <Typography>{`${usd}`}</Typography>
        </div>
        <div className={classes.genres}>
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
