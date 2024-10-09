import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Banner() {
  
   const [movieObj, setMovieObj] = useState({});

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=2b1dbea324598f2a439aa6f16c25bb7e').then(function(response){
      // console.log(response);
      let movies = response.data.results;
       //console.log('movies', movies)
      let randomMovie = movies[Math.floor(Math.random() * movies.length)]; // square data will  give inner data of array else give the number of movie
     
      setMovieObj(randomMovie);
      // console.log('randommovies', randomMovie)
    }).catch(function(error) {
      console.error("Error fetching movies:", error);
    });

  },[])

  
    return (
      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})` }}>
        <div className="absolute bottom-0 text-white bg-gray-900/60 w-full p-4 text-center text-xl">
        {movieObj.title ? movieObj.title : "Movie Name"}
        </div>
      </div>
    );
  }
  
export default Banner