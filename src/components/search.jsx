import React from 'react';
import { TextField } from '@material-ui/core';

const Search = ({ setSearchQuery }) => {
  const handleKeyDown = e => {
    if (e.keyCode === 13 && e.target.value !== '') setSearchQuery(e.target.value);
  };

  return (
    <>
      <TextField variant="outlined" onKeyUp={handleKeyDown} />
    </>
  );
};

export default Search;
