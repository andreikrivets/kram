import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { StarBorder, Language, TheatersOutlined } from '@material-ui/icons/';

const spanStyle = {
  display: 'flex',
  alignItems: 'flex-end',
};

const MovieCard = ({ data }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
  console.log(data);
  return (
    <Card style={{ margin: '2%', minHeight: '200px', display: 'flex' }}>
      <div style={{ display: 'flex' }}>
        <CardContent
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}
        >
          <Typography variant="h5">{`${data.title} / ${data.original_title}`}</Typography>
          <Typography variant="subtitle1">{data.overview}</Typography>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Typography variant="caption" style={spanStyle}>
              <TheatersOutlined />
              {data.media_type}
            </Typography>
            <Typography variant="caption" style={spanStyle}>
              <Language />
              {data.original_language}
            </Typography>
            <Typography variant="caption" style={spanStyle}>
              <StarBorder />
              {`${data.vote_average}/${data.vote_count}`}
            </Typography>
          </div>
        </CardContent>
        <CardMedia image={imageUrl} title={data.title} style={{ minWidth: '20%' }} />
      </div>
    </Card>
  );
};

export default MovieCard;
