import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import banner from '../../Assets/Images/banner-wallpaper.jpg'
import { Pagination } from '../Pagination/Pagination';




function TrendingMovie({isListed, setIsListed, handleIsLikedWatchList, handleRemoveFromWatchList}) {

  const [movies, setMovies] = useState([]);
  const [pageno, setPageNo] = useState(1);
  
  const handleNextPage = () => {
    setPageNo(pageno + 1);
  }

  const handlePreviousPage = ( ) =>{
    if(pageno > 1){
    setPageNo(pageno - 1);}
  }

  useEffect(() => {
    let watchListFromLocalStorage = JSON.parse(localStorage.getItem('watchList'));
    if (!watchListFromLocalStorage) {
      watchListFromLocalStorage = []; // Set to an empty array if null
    }
    setIsListed(watchListFromLocalStorage);
  }, []);
  

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=2b1dbea324598f2a439aa6f16c25bb7e&page=${pageno}`).then(function(response){
      // console.log(response);
      let movies = response.data.results;
      
      setMovies(movies);
      // console.log('randommovies', randomMovie)
    }).catch(function(error) {
      console.error("Error fetching trending movies:", error);
    });

  },[pageno]) //it will make sure to execute callback in mounting as well as on updation of pageNo state

    return (
        <>
        <h2 className="text-sky-500 mx-2 font-bold text-2xl text-center py-2">Trending Movies</h2>
        <div className="flex flex-wrap justify-around bg-gray-100 gap-8 py-4">
          {movies.map((movieObj, index) => (
            <Card
              key = {movieObj.id}
              movieObj = {movieObj}
              title = {movieObj.title}
              value = {movieObj.value}
              icon = {movieObj.icon}
              poster_path={movieObj.poster_path}
              handleIsLikedWatchList = {handleIsLikedWatchList}
              handleRemoveFromWatchList = {handleRemoveFromWatchList}
              isListed={isListed}
            />
          ))}
        </div>
        <Pagination
        handleNextPage = {handleNextPage}
        handlePreviousPage = {handlePreviousPage}
        currentPage = {pageno}/>
        </>
      );
}

export default TrendingMovie






