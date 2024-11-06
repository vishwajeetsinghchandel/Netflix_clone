import React, { useEffect, useState } from 'react';
import './TitleCards.css';
import {Link} from 'react-router-dom'; 

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTY2NDI3NTJkNmRlNWUwNzAzODI0YWEzMWU2ZjliMSIsIm5iZiI6MTczMDc5NTIxMC40OTI1MzczLCJzdWIiOiI2NzI5ZDVhNzBjZTZkMTRhNDA5ZWE1N2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MNq0V4ntQ0Zyg0f8is00GLtdQb-7GI_FrfrL-yIu_SU'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error("Error fetching data:", err));
  }, [category]);  // Added `category` dependency

  const handleScroll = (event) => {
    event.preventDefault();
    event.currentTarget.scrollLeft += event.deltaY;
  };

  return (
    <div className='titlecards'>
      <h2>{title || "Popular on Netflix"}</h2>
      <div className='card-list' onWheel={handleScroll}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className='card' key={index}>
            {card.backdrop_path ? (
              <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
            ) : (
              <div className='placeholder-image'>No Image Available</div>
            )}
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
