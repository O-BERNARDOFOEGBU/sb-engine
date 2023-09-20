import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as Camcorder } from '../assets/video-camera.svg';
import {ReactComponent as DirectorImg } from '../assets/director.svg';

const Dashboard = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    // Define the API URL
    const apiUrl = `${process.env.REACT_APP_API_BASE_URL}films/`;

    // Make the API request
    axios.get(apiUrl)
      .then((response) => {
        setFilms(response.data.results);
        console.log(response)
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching films:', error);
        setLoading(false);
      });
  }, []);


  return (
   <div>
     <div className="top-div bg-white h-12 border-t-2 border-white-smoke">
      
      </div>
      <div className='flex space-x-4 px-4 bg-white-smoke mt-5'>
        <div className='w-1/5 bg-white rounded p-4'>
          <div className='flex justify-between font-medium'><p>Films</p> <Camcorder className='bg-light-green w-5 h-5 rounded-sm'/> </div>
          <div className='font-bold text-md mt-12'> 200 </div>
          <div className='text-small'><span className='text-light-green pr-1'>↑ 20</span>More than yesterday </div>
        </div>
        <div className='w-1/5 bg-white rounded p-4'>
          <div className='flex justify-between font-medium'><p>Starships</p> <Camcorder className='bg-light-green w-5 h-5 rounded-sm'/> </div>
          <div className='font-bold text-md mt-12'> 200 </div>
          <div className='text-small'><span className='text-light-green pr-1'>↑ 20</span>More than yesterday </div>
        </div>
        <div className='w-1/5 bg-white rounded p-4'>
          <div className='flex justify-between'><p>Films</p> <Camcorder className='bg-light-green w-5 h-5 rounded-sm'/> </div>
          <div className='font-bold text-md mt-12'> 200 </div>
          <div className='text-small'><span className='text-light-green pr-1'>↑ 20</span>More than yesterday </div>
        </div>
        <div className='w-1/5 bg-white rounded p-4'>
          <div className='flex justify-between'><p>Films</p> <Camcorder className='bg-light-green w-5 h-5 rounded-sm'/> </div>
          <div className='font-bold text-md mt-12'> 200 </div>
          <div className='text-small'><span className='text-light-green pr-1'>↑ 20</span>More than yesterday </div>
        </div>
        <div className='w-1/5 bg-white rounded p-4'>
          <div className='flex justify-between'><p>Films</p> <Camcorder className='bg-light-green w-5 h-5 rounded-sm'/> </div>
          <div className='font-bold text-md mt-12'> 200 </div>
          <div className='text-small'><span className='text-light-green pr-1'>↑ 20</span>More than yesterday </div>
        </div>
      </div>
      <div className="m-4 bg-white pl-8 py-6" >
      <h2 className='mb-4 font-medium'>Films</h2>
      <div className='flex text-xs space-x-2 '>
        <div >
          <p className='text-inactive mb-5'>Film Title</p>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className='w-45 mr-5 space-y-4'>
              {films.map((film) => (
                
                <li key={film.title} className='flex space-x-2 items-center'> <Camcorder className='bg-light-green w-5 h-5 rounded-3xl'/> <p>{film.title}</p></li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <p className='text-inactive mb-5'>Director</p>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className='w-25 mr-5 space-y-4'>
            {films.map((film) => (
                <li key={film.episode_id} className='flex space-x-2 items-center'> <DirectorImg className='w-5 h-5'/> <p>{film.director}</p></li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <p className='text-inactive mb-5'>Producer</p>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className='w-25 mr-5 space-y-4'>
            {films.map((film) => (
                <li key={film.episode_id} className='flex space-x-2 items-center'><DirectorImg className='w-5 h-5'/><p>{film.producer.split(',')[0].trim()}</p></li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <p className='text-inactive mb-5'>Release Date</p>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className='w-30 mr-4  space-y-4'>
            {films.map((film) => (
                <li key={film.episode_id} className='flex space-x-2 items-center'><p>{film.release_date}</p> <DirectorImg className='w-5 h-5 invisible'/></li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <p className='text-inactive mb-5'>Episode ID</p>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className='w-25 mr-12  space-y-4'>
            {films.map((film) => (
                <li key={film?.episode_id}className='flex space-x-2 items-center'><p>{film.episode_id}</p> <DirectorImg className='w-5 h-5 invisible'/></li>
              ))}
            </ul>
          )}
        </div>
        <div className='mx-5'>
          <p className='text-inactive mb-5'>Characters</p>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className='w-25 mr-5  space-y-4'>
            {films.map((film) => (
                <li key={film.episode_id}className='flex space-x-2 items-center text-light-green'><p>{film.url}</p> <DirectorImg className='w-5 h-5 invisible'/></li>
              ))}
            </ul>
          )}
        </div>
      </div>   
      </div>
   </div>
  )
}

export default Dashboard