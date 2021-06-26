import React, { useState, useEffect } from 'react';
import './Banner.css';
import Requests from './Requests';
import axios from './axios';
function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
  
      async function fetchData() {
  
        const request = await axios.get(Requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
          Math.floor(Math.random() * request.data.results.length-1)
          ]
        );
        // Math.floor(Math.random() * request.data.results.length -1)
        return request;
      }
      fetchData();
    }, []);

    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1) + '...' :string;
    }

    return (
        <header className="banner"
         style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPoistion:"center center"
      }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                  <button className="banner__button">Play</button>
                  <button className="banner__button">More Info</button>
                </div>
                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
            </div>

            <div className="banner--fadeBottom">

            </div>
        </header>
    )
}

export default Banner;
