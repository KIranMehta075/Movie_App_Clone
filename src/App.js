import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import React, { useState } from 'react';
import NavBar from "./components/NavBar/NavBar";
import WatchList from "./components/WatchList/WatchList";
import Home from "./components/Home/Home";

function App() {

  const [isListed, setIsListed] = useState([]);
  

   
  const handleIsLikedWatchList = (movie) => {
    const exists = isListed.find((listedMovie) => listedMovie.id === movie.id);
    if (!exists) {
       //const newList = [...isListed];
     // newList.push(id);
      const newList = [...isListed, movie];
      localStorage.setItem('watchList', JSON.stringify(newList));
      setIsListed(newList);
    }
  };
  
   const handleRemoveFromWatchList = (movieObj)=> {
    const newList = isListed.filter((movieId)=>{
      return movieId.id!== movieObj.id;
    })
    localStorage.setItem('watchList',JSON.stringify(newList));
    setIsListed(newList);
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home 
        handleIsLikedWatchList = {handleIsLikedWatchList}
        handleRemoveFromWatchList = {handleRemoveFromWatchList}
        isListed = {isListed}
        setIsListed = {setIsListed} />} />

        <Route path="/watchlist" element={<WatchList 
        isListed = {isListed}
        handleRemoveFromWatchList = {handleRemoveFromWatchList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
