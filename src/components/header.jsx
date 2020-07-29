import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  headerLink: {
    color: '#581845',
    cursor: 'pointer',
    transition: '0.4s ease-out',
    '&:hover': {
      color: '#C70039',
    },
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" style={{ textAlign: 'center' }}>
        <Link color="inherit" href="/" underline="none" className={classes.headerLink}>
          The Movie Database
        </Link>
      </Typography>
    </>
  );
};

export default Header;
