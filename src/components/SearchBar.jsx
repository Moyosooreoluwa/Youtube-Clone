import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchterm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) navigate(`/search/${searchTerm}`);
    setSearchterm('');
  };
  return (
    <>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          borderRadius: 20,
          border: '1px solid #e3e3e3',
          p1: 2,
          boxShadow: 'none',
          mr: { sm: 5 },
          pl: '10px',
        }}
      >
        <input
          className="search-bar"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchterm(e.target.value);
          }}
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
