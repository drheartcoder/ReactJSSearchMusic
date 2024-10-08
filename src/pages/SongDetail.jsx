import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSongDetails, getArtistTopTracks } from '../services/lastFmService';

const SongDetail = () => {
  const { artist, track } = useParams();
  const [songDetails, setSongDetails] = useState(null);
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const songInfo = await getSongDetails(artist, track);
      const artistTracks = await getArtistTopTracks(artist);
      setSongDetails(songInfo);
      setTopTracks(artistTracks.filter(t => t.name !== track));
    };
    fetchData();
  }, [artist, track]);

  if (!songDetails) return <div>Loading...</div>;

  return (
    <div>
      <h1>{songDetails.name} by {songDetails.artist.name}</h1>
      <p>{songDetails.wiki?.summary}</p>
      <h2>Top Songs by {songDetails.artist.name}</h2>
      <ul>
        {topTracks.map((song) => (
          <li key={song.mbid}>{song.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SongDetail;
