import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const navigate=useNavigate();
  const {id}=useParams();
  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: ''
  });

  const url = 'https://api.themoviedb.org/3/movie/693134/videos?language=en-US';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTY2NDI3NTJkNmRlNWUwNzAzODI0YWEzMWU2ZjliMSIsIm5iZiI6MTczMDc5NTIxMC40OTI1MzczLCJzdWIiOiI2NzI5ZDVhNzBjZTZkMTRhNDA5ZWE1N2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MNq0V4ntQ0Zyg0f8is00GLtdQb-7GI_FrfrL-yIu_SU'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(json => setApiData(json.results[0]))  // Corrected json.results[0]
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='player'>
      <img src={back_arrow_icon} onClick={()=>{navigate(-1)}} alt="back arrow" />
      
      <iframe
        width='90%'
        height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer'
        frameBorder='0'  // Corrected attribute name
        allowFullScreen
      ></iframe>
      <div className='player-info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
