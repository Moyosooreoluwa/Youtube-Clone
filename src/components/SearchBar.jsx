import React from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <>
      <Paper
        component="form"
        onSubmit={() => {}}
        sx={{
          borderRadius: 20,
          border: '1px solid #e3e3e3',
          p1: 2,
          boxShadow: 'none',
          mr: { sm: 5 },
        }}
      >
        <input
          className="search-bar"
          placeholder="Search"
          value=""
          onChange={() => {}}
          sx={{ mr: '10px' }}
        />{' '}
        <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;
