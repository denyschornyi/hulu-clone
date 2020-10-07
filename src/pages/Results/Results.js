import React, {useState, useEffect} from 'react';
import FlipMove from 'react-flip-move';
import './Results.css'

import axios from '../../axios';
import requests from '../../requests';

import VideoCard from '../../components/VideoCard';
import Nav from '../../components/Nav'

function Results() {
    const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
    const [movies, setMovies] = useState([selectedOption]);


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [selectedOption])

    return (
        <React.Fragment>
            <Nav setSelectedOption={setSelectedOption}/>
            <div className="results">
                <FlipMove>
                    {movies.map(movie => (
                        <VideoCard key={movie.id} movie={movie}/>
                    ))}
                </FlipMove>
            </div>
        </React.Fragment>
    )
}

export default Results
