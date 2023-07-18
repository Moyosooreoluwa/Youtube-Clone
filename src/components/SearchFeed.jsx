import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';
import Videos from './Videos';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
          pb={3}
          mt={3}
          pt={3}
          sx={{ color: 'white' }}
        >
          Results for: <span style={{ color: '#f31503' }}>{searchTerm}</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </>
  );
};

export default SearchFeed;
