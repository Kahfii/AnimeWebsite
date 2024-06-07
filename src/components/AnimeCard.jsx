import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnimeCard = ({ anime }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/anime/${anime.mal_id}`, { state: { anime } });
  };

  return (
    <div onClick={handleClick} className="bg-customCard shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-500 hover:bg-blue-300 cursor-pointer">
      <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-96 object-cover rounded mb-4" />
      <h2 className="text-white text-xl font-bold">{anime.title}</h2>
      <div className="text-white text-sm mt-2">
        <p>Rating: {anime.score}</p>
        <p>Genres: {anime.genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default AnimeCard;
