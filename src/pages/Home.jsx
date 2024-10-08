import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { searchSongs } from '../services/lastFmService';

const Home = () => {
  const [songs, setSongs] = useState([]);

  const handleSearch = async (query) => {
    const result = await searchSongs(query);
    setSongs(result);
  };

  return (
    <div>
      <h1>Search for Songs</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {songs.map((song) => (
          <li key={song.mbid}>
            <Link to={`/song/${encodeURIComponent(song.artist)}/${encodeURIComponent(song.name)}`}>
              {song.name} by {song.artist}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
