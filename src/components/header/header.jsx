import React from 'react';
import { Typography, Link } from '@material-ui/core';

import useStyles from './headerStyles';

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
