import React from "react";

// 1. Set up a table structure
// 2. add labels to table structure
// 3. pass data from trending movies to watchlist
// 4. show movies with filter e.g. genres, comedy, horror, etc
// 5. set up serach with typing the name of the movie

function Watchlist() {
  return <>
   <div className=" border-2  rounded-lg m-8 overflow-x-auto"> 
  <table className=" w-full " >
 
  <thead className="border-b-2 bg-slate-200">
    <tr>
      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Name</th>
      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Ratings</th>
      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Popularity</th>
      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Genre</th>
      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr className="">
      <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700 ">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700 ">Malcolm Lockyer</td>
      <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700 ">1961</td>
    </tr>
    <tr>
      <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700 ">Witchy Woman</td>
      <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700 ">The Eagles</td>
      <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700 ">1972</td>
    </tr>
    <tr>
      <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700 ">Shining Star</td>
      <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700 ">Earth, Wind, and Fire</td>
      <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700 ">1975</td>
    </tr>
  </tbody>
</table>
  </div> 

 
  </>;
}

export default Watchlist;
