import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoInfo from './components/VideoInfo';
import ChannelInfo from './components/ChannelInfo';
import SearchFeed from './components/SearchFeed';

function App() {
  return (
    <BrowserRouter>
      <>
        <Box sx={{ backgroundColor: '#000' }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" elememt={<VideoInfo />} />
            <Route path="/channel/:id" elememt={<ChannelInfo />} />
            <Route path="/search/:searchTerm" elememt={<SearchFeed />} />
          </Routes>
        </Box>
      </>
    </BrowserRouter>
  );
}

export default App;
