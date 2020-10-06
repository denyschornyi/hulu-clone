import React from 'react'
import TextTruncate from 'react-text-truncate';

import './VideoCard.css'


const base_url = 'https://image.tmdb.org/t/p/original'

function VideoCard({movie}) {
    console.log(movie);
    return (
        <div className="videoCard">
            <img src={base_url + movie.backdrop_path || movie.poster_path} alt="movie"/>
            <TextTruncate
                line={1}
                element="p"
                truncateText="…"
                text={movie.overview}
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p>{movie.first_air_date || movie.release_date}</p>
        </div>
    )
}

export default VideoCard
