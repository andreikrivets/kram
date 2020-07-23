import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const Search = () => {
  const [value, setValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  console.log(value, searchValue);

  const handleKeyDown = e => {
    if (e.keyCode === 13) setSearchValue(e.target.value);
    else setValue(e.target.value);
  };

  return (
    <>
      <TextField variant="outlined" onKeyDown={handleKeyDown} />
    </>
  );
};

export default Search;
