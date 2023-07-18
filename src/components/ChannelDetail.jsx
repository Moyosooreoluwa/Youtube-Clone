import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Box } from '@mui/material';
import ChannelCard from './ChannelCard';
import Videos from './Videos';

const ChannelInfo = () => {
  const [channelInfo, setChannelInfo] = useState([]);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelInfo(data?.items[0]);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: '300px',
            background:
              'linear-gradient(172deg, rgba(0,0,0,1) 0%, rgba(52,4,4,1) 32%, rgba(232,20,20,1) 89%)',
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelInfo} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelInfo;

// UCGYYNGmyhZ_kwBF_lqqXdAQ
// UCMmVPVb0BwSIOWVeDwlPocQ
