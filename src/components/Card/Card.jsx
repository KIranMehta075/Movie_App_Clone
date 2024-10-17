import React from "react";

// const Card = ({ id, title, poster_path, isListed, handleIsLikedWatchList, handleRemoveFromWatchList }) => {
//   return (
//     <>
//      <div
//       className="relative h-[40vh] shadow-md rounded-xl overflow-hidden bg-cover bg-no-repeat m-2 w-56 transition-transform duration-300 ease-in-out transform hover:scale-110 flex flex-col justify-end"
//       style={{
//         backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
//       }}
//     >
      
//       {isListed.includes(id) ? (
//         <div
//           onClick={() => handleRemoveFromWatchList(id)}
//           className="absolute top-2 right-2 text-xl rounded-lg cursor-pointer p-2 bg-slate-950/50"
//         >
//           &#10060;
//         </div>
//       ) : (
//         <div
//           onClick={() => handleIsLikedWatchList(id)}
//           className="absolute top-2 right-2 text-xl rounded-lg cursor-pointer p-1 bg-slate-950/50"
//         >
//           &#128525;
//         </div>
//       )}
//         <div className=" w-full text-xl bg-gray-900/60 text-white text-center  p-2">
//           {title}
//         </div>
//       </div>
//     </>
//   );
// };



const Card = ({ id, title, poster_path, isListed, handleIsLikedWatchList, handleRemoveFromWatchList }) => {
  return (
    <div
      className="h-[40vh] shadow-md rounded-xl overflow-hidden bg-cover bg-no-repeat m-2 w-56 transition-transform duration-300 ease-in-out transform hover:scale-110 flex flex-col"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
      }}
    >
      <div className="flex justify-end p-2">
        {isListed.includes(id) ? (
          <div
            onClick={() => handleRemoveFromWatchList(id)}
            className="text-xl rounded-lg cursor-pointer p-2 bg-slate-950/50"
          >
            &#10060;
          </div>
        ) : (
          <div
            onClick={() => handleIsLikedWatchList(id)}
            className="text-xl rounded-lg cursor-pointer p-1 bg-slate-950/50"
          >
            &#128525;
          </div>
        )}
      </div>
      <div className="flex-grow"></div>
      <div className="w-full text-xl bg-gray-900/60 text-white text-center p-2">
        {title}
      </div>
    </div>
  );
};



export default Card;
