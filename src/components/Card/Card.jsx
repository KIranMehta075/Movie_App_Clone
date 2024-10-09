import React from 'react';


const Card = ({ title, value, icon, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-2 w-64">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
          {title}
        </div>
      </div>
      {/* <div className="p-4">
        <div className="flex items-center">
          <div className="text-4xl text-blue-500">
            {icon}
          </div>
          <div className="ml-4">
            <p className="text-gray-700">{value}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Card;

