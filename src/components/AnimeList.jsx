import React, { useEffect, useState } from 'react';
import AnimeCard from './AnimeCard';
import Load from './Load'; 

const AnimeList = ({ searchTerm }) => {
  const [animes, setAnimes] = useState([]);
  const [filteredAnimes, setFilteredAnimes] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        const response = await fetch('https://api.jikan.moe/v4/top/anime');
        const data = await response.json();
        setAnimes(data.data); 
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };

    fetchData(); 
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredAnimes(animes);
    } else {
      const filteredData = animes.filter((anime) =>
        anime.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredAnimes(filteredData);
    }
  }, [searchTerm, animes]);

  if (loading) {
    return <Load />; 
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredAnimes.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
