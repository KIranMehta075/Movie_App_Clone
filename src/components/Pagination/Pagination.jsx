// 1. make pagination function/ component
// 2. need right left arrow with initial state
// 3. import in trending js
// 4. should be stick at bottom of the page

import React from 'react'

export const Pagination = ({handleNextPage, handlePreviousPage, currentPage}) => {
    
  return (
    <div className="flex items-center bg-black text-white justify-center space-x-4 mt-4 py-4">
        <button className="transition-transform duration-300 ease-in-out transform hover:scale-125 hover:bg-gray-500 text-white  px-4 py-2"
        onClick = {handlePreviousPage}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
        </svg>
        </button>
        <span className="text-xl"> {currentPage} </span>
        <button 
  onClick={handleNextPage} 
  className="transition-transform duration-300 ease-in-out transform hover:scale-125 hover:bg-gray-500 text-white  px-4 py-2"
>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
        </svg>
        </button>
    </div>
  )
}
