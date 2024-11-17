import React from "react";
import Banner from "../Banner/Banner";
import TrendingMovie from "../TrendingMovie/TrendingMovie";

function Home({isListed, setIsListed, handleIsLikedWatchList, handleRemoveFromWatchList}) {
  return (
    <>
      <Banner />
      <TrendingMovie handleIsLikedWatchList = {handleIsLikedWatchList}
      handleRemoveFromWatchList = {handleRemoveFromWatchList}
      isListed = {isListed}
      setIsListed = {setIsListed} />
    </>
  );
}

export default Home;
