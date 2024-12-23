import React from "react";

// 1. Set up a table structure
// 2. add labels to table structure
// 3. pass data from trending movies to watchlist
// 4. show movies with filter e.g. genres, comedy, horror, etc
// 5. set up serach with typing the name of the movie

function Watchlist({isListed, handleRemoveFromWatchList}) {
  return <>
   <div className=" border-2  rounded-lg m-8 overflow-x-auto"> 
  <table className=" w-full " >
 
  <thead className="border-b-2 bg-slate-200">
    <tr>
      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Name</th>
      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Ratings</th>
      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Popularity</th>
      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Genre</th>
      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Action</th>
    </tr>
  </thead>
  <tbody>
  {isListed.map((movieObj) => (
              <tr className="border-b-2" key={movieObj.id}>
                <td className="px-6 py-4">
                  <img
                    className="h-[6rem] w-[10rem]"
                    src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`}
                    alt={movieObj.title}
                  />
                
               
                  <div className= " `py-4  text-sm text-gray-700" >{movieObj.title}</div>
                </td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">
                  {movieObj.vote_average}
                </td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">
                  {movieObj.popularity}
                </td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">
                {movieObj.genre_ids?.join(", ") || "N/A"}
                </td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">
                  <button
                    onClick={() => handleRemoveFromWatchList(movieObj.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
   
  </tbody>
</table>
  </div> 

 
  </>;
}

export default Watchlist;
