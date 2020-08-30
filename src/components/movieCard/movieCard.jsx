import React from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import { Card, CardContent, CardActionArea, Typography } from '@material-ui/core';

import useStyles from './movieCardStyle';

const spanStyle = {
  display: 'flex',
  alignItems: 'flex-end',
};

const MovieCard = ({ data, genres }) => {
  const imageUrl = data.poster_path
    ? `https://image.tmdb.org/t/p/w200${data.poster_path}`
    : 'https://s.tocd.de/tontopf/BvHHq7JAYz/konfiguratorVorschauGross/32mm_c_hook_jpg';
  const gen = [];
  if (!genres) return null;
  genres.forEach(el => {
    data.genre_ids.forEach(e => {
      if (el.id === e) gen.push(el.name);
    });
  });

  const classes = useStyles();

  return (
    <Card className={classes.card} key={uniqid()}>
      <CardActionArea>
        <Link
          to={{ pathname: '/movie', id: data.id, title: data.title, gen }}
          className={classes.link}
        >
          <div style={{ display: 'flex' }}>
            <img src={imageUrl} title={data.title} className={classes.img} alt="pic" />
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" color="primary" style={{ fontSize: '2rem' }}>
                {data.title}
              </Typography>
              <Typography variant="caption">
                {data.original_language !== 'en' ? data.original_title : null}
              </Typography>
              <Typography variant="subtitle1">
                {data.overview.length < 300 ? data.overview : `${data.overview.slice(0, 300)}...`}
              </Typography>
              <div className={classes.mainInfo}>
                <Typography variant="body2" style={spanStyle}>
                  <span role="img" aria-label="img">
                    🎥
                  </span>
                  {data.media_type}
                </Typography>
                <Typography variant="body2" style={spanStyle} color="secondary">
                  <span role="img" aria-label="img">
                    🌐
                  </span>
                  {data.original_language.toUpperCase()}
                </Typography>
                <Typography variant="body2" style={spanStyle}>
                  <span role="img" aria-label="img">
                    ⭐
                  </span>
                  {`${data.vote_average}`}
                </Typography>
              </div>
              <div className={classes.genres}>
                {gen.map(el => (
                  <Typography variant="body2" color="primary" key={uniqid()}>
                    {el}
                  </Typography>
                ))}
              </div>
            </CardContent>
          </div>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
