import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
} from '../utils/constants';
import Videos from './Videos';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <>
      <Card
        sx={{
          width: { md: '320px', xs: '100%', sm: '358px' },
          boxShadow: 'none',
          borderRadius: 'none',
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            alt={snippet?.title}
            sx={{
              width: { xs: '100%', sm: '358px', md: '320px' },
              height: 180,
            }}
            image={snippet?.thumbnails?.high?.url}
          />
        </Link>
        <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/video/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" fontWeight="bold" color="grey">
              {snippet?.channelTitle.slice(0, 60) ||
                demoChannelTitle.slice(0, 60)}
              <CheckCircleIcon
                sx={{ fontSize: 12, color: 'grey', ml: '5px' }}
              />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default VideoCard;
