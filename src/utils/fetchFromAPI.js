// import axios from 'axios';

// export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = {
//   url: BASE_URL,
//   params: {
//     maxResults: '50',
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//   },
// };

// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

//   return data;
// };

import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  //   method: 'GET',
  url: BASE_URL,
  params: {
    // q: 'music',
    // part: 'snippet,id',
    // regionCode: 'US',
    maxResults: '50',
    // order: 'date',
  },
  headers: {
    'X-RapidAPI-Key': 'cb81327bedmshce26f3b62ce47e2p172f0ajsn2e8956e3fc9a',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
