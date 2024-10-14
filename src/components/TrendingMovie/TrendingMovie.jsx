import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import banner from '../../Assets/Images/banner-wallpaper.jpg'
import { Pagination } from '../Pagination/Pagination';


const metrics = [
    { title: 'Movie 1', value: 'Rating: 8.2',  imageUrl: banner },
    { title: 'Movie 2', value: 'Rating: 7.5',  imageUrl: banner },
    { title: 'Movie 3', value: 'Rating: 9.0',  imageUrl: banner },
    { title: 'Movie 4', value: 'Rating: 6.8', imageUrl: banner },
  ];


function TrendingMovie() {

  const [movies, setMovies] = useState([]);
  const [isListed, setIsListed] = useState([]);
  const [pageno, setPageNo] = useState(1);

   const handleIsLikedWatchList = (id) =>{
      const newList = [...isListed];
      newList.push(id);
      setIsListed(newList);
  }

   const handleRemoveFromWatchList = (id)=> {
    const newList = isListed.filter((movieId)=>{
      return id!==movieId;
    })
    //localStorage.setItem('watchList',JSON.stringify(newWatchList));
    setIsListed(newList);
  }

  const handleNextPage = () => {
    setPageNo(pageno + 1);
  }

  const handlePreviousPage = ( ) =>{
    if(pageno > 1){
    setPageNo(pageno - 1);}
  }

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
              id = {movieObj.id}
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






