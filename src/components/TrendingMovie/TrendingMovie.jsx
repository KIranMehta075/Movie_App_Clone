import React from 'react'
import Card from '../Card/Card'
import banner from '../../Assets/Images/banner-wallpaper.jpg'


const metrics = [
    { title: 'Movie 1', value: 'Rating: 8.2',  imageUrl: banner },
    { title: 'Movie 2', value: 'Rating: 7.5',  imageUrl: banner },
    { title: 'Movie 3', value: 'Rating: 9.0',  imageUrl: banner },
    { title: 'Movie 4', value: 'Rating: 6.8', imageUrl: banner },
  ];


function TrendingMovie() {
    return (
        <>
        <h2 className="text-sky-500 mx-2 font-bold text-2xl text-center py-2">Trending Movies</h2>
        <div className="flex flex-wrap justify-center p-6 bg-gray-100 ">
          {metrics.map((metric, index) => (
            <Card
              key = {index}
              title = {metric.title}
              value = {metric.value}
              icon = {metric.icon}
              imageUrl = {metric.imageUrl}
            />
          ))}
        </div>
        </>
      );
}

export default TrendingMovie






