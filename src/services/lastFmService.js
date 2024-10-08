import axios from 'axios';

const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
const BASE_URL = import.meta.env.VITE_LASTFM_BASE_URL;

const searchSongs = async (songTitle) => {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      method: 'track.search',
      track: songTitle,
      api_key: API_KEY,
      format: 'json'
    }
  });
  return response.data.results.trackmatches.track;
};

const getSongDetails = async (artist, track) => {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      method: 'track.getInfo',
      artist: artist,
      track: track,
      api_key: API_KEY,
      format: 'json'
    }
  });
  return response.data.track;
};

const getArtistTopTracks = async (artist) => {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      method: 'artist.getTopTracks',
      artist: artist,
      api_key: API_KEY,
      format: 'json'
    }
  });
  return response.data.toptracks.track;
};

export { searchSongs, getSongDetails, getArtistTopTracks };
