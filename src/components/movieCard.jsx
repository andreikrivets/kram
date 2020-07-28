import React from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@material-ui/core';
import { StarBorder, Language, TheatersOutlined } from '@material-ui/icons/';

const spanStyle = {
  display: 'flex',
  alignItems: 'flex-end',
};

const MovieCard = ({ data, genres }) => {
  const imageUrl = data.poster_path
    ? `https://image.tmdb.org/t/p/w200${data.poster_path}`
    : 'https://s.tocd.de/tontopf/BvHHq7JAYz/konfiguratorVorschauGross/32mm_c_hook_jpg';
  const gen = [];

  genres.forEach(el => {
    data.genre_ids.forEach(e => {
      if (el.id === e) gen.push(el.name);
    });
  });

  return (
    <Card style={{ margin: '2%', minHeight: '250px', display: 'flex' }} key={uniqid()}>
      <CardActionArea>
        <Link to="/movie" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ display: 'flex' }}>
            <CardContent
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}
            >
              <Typography variant="h5" color="primary">
                {data.title}
              </Typography>
              <Typography variant="caption">
                {data.original_language !== 'en' ? data.original_title : null}
              </Typography>
              <Typography variant="subtitle1">
                {data.overview.length < 300 ? data.overview : `${data.overview.slice(0, 300)}...`}
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2%' }}>
                <Typography variant="body2" style={spanStyle}>
                  <TheatersOutlined color="primary" />
                  {data.media_type}
                </Typography>
                <Typography variant="body2" style={spanStyle} color="secondary">
                  <Language color="primary" />
                  {data.original_language.toUpperCase()}
                </Typography>
                <Typography variant="body2" style={spanStyle}>
                  <StarBorder color="primary" />
                  {`${data.vote_average}`}
                </Typography>
              </div>
              <div
                style={{
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
            </CardContent>
            <CardMedia image={imageUrl} title={data.title} style={{ minWidth: '20%' }} />
          </div>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
