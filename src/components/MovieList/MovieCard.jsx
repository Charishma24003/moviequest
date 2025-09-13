import React from 'react';

import './MovieCard.css';
import Star from '../../assets/star.png';

const MovieCard = () => {
  return (
    <a href="" className="movie_card">
        <img src='https://imgs.search.brave.com/FBzZKqgDth8lE3LbyCNGHchPTZmU648PbAAxzCxJQN4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/am9ibG8uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAx/L3RoZS1jb25qdXJp/bmctNC1wb3N0ZXIt/NDAweDYwMC5qcGc' alt='poster' className='movie_poster'/>

    <div className="movie_details">
        <h3 className="movie_details_heading">Movie name</h3>
        <div className="align_center movie_date_rate">
            <p>12-10-2020 </p>
            <p>8.0 <img src={Star} alt='rateIcon' className='card_emoji'/></p>
        </div>
        <p className="movie_description">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cum, culpa tempora aliquam molestias quisquam!
        </p>
    </div>


    </a>
  )
}

export default MovieCard
