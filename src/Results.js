import React, {useState, useEffect} from 'react';
import './Results.css'

import axios from './axios';
import requests from './requests';

import VideoCard from './VideoCard';

function Results() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [])

    return (
        <div className="results">
            {movies.map(movie => (
                 <VideoCard movie={movie}/>
            ))};
        </div>
    )
}

export default Results
