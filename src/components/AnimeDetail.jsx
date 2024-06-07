import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Load from './Load';

const AnimeDetail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const data = await response.json();
        setAnime(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchAnime();
  }, [id]);

  if (loading) {
    return <Load/>;
  }

  if (!anime) {
    return <div>Error loading anime details.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          className="w-full lg:w-1/3 h-auto object-cover rounded mb-4 lg:mb-0"
        />
        <div className="lg:ml-4 flex-1">
          <h2 className="text-3xl font-bold mb-4 text-white">{anime.title}</h2>
          <p className="text-gray-400 mb-2">Rating: {anime.score}</p>
          <p className="text-gray-400 mb-2">Genres: {anime.genres.map((genre) => genre.name).join(', ')}</p>
          <p className="text-gray-400 mb-2">Episodes: {anime.episodes}</p>
          <p className="text-gray-400 mb-2">Duration: {anime.duration}</p>
          <p className="text-gray-400 mb-4">{anime.synopsis}</p>
        </div>
      </div>
      <div className="mt-4">
        <iframe
          className="w-full aspect-video rounded"
          src={`https://www.youtube.com/embed/${anime.trailer.youtube_id}`}
          title="Anime Trailer"
          frameBorder="0"

          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default AnimeDetail;
