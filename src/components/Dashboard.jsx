import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as Camcorder } from '../assets/video-camera.svg';
import {ReactComponent as DirectorImg } from '../assets/director.svg';
import {ReactComponent as Starships} from '../assets/ufo.svg';
import {ReactComponent as People} from '../assets/group-of-students.svg';
import {ReactComponent as Vehicle} from '../assets/taxi.svg';
import {ReactComponent as Species} from '../assets/phylogenetics.svg';



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
     <div className="top-div flex justify-end items-center space-x-4 pr-10 bg-white h-12 border-t-2 border-white-smoke">
      <div className='flex justify-between space-x-8 border-solid rounded bg-gray-98 border-bright-gray h-8 px-4 items-center'><p className='text-inactive'>Current Year </p> <img width="8" height="5" src="https://img.icons8.com/ios-glyphs/30/sort-down.png" alt="sort-down"/></div>
      <div className='flex justify-between space-x-8 border-solid rounded bg-gray-98 border-bright-gray h-8 px-4 items-center'><p className='text-inactive'>Current Week </p> <img width="8" height="5" src="https://img.icons8.com/ios-glyphs/30/sort-down.png" alt="sort-down"/></div>
      </div>
      <div className='flex space-x-4 px-4 bg-white-smoke mt-5'>
        <div className='w-1/5 bg-white rounded p-4'>
          <div className='flex justify-between font-medium'><p>Films</p> <Camcorder className='bg-light-green w-5 h-5 rounded-sm'/> </div>
          <div className='font-bold text-md mt-12'> 200 </div>
          <div className='text-small'><span className='text-light-green pr-1'>↑ 20</span>More than yesterday </div>
        </div>
        <div className='w-1/5 bg-white rounded p-4'>
          <div className='flex justify-between font-medium'><p>Starships</p> <Starships className='bg-light-blue w-5 h-5 rounded-sm'/> </div>
          <div className='font-bold text-md mt-12'> 200 </div>
          <div className='text-small'><span className='text-light-green pr-1'>↑ 20</span>More than yesterday </div>
        </div>
        <div className='w-1/5 bg-white rounded p-4'>
          <div className='flex justify-between font-medium'><p>People</p> <People className='bg-purple w-5 h-5 rounded-sm'/> </div>
          <div className='font-bold text-md mt-12'> 200 </div>
          <div className='text-small'><span className='text-light-green pr-1'>↑ 20</span>More than yesterday </div>
        </div>
        <div className='w-1/5 bg-white rounded p-4'>
          <div className='flex justify-between font-medium'><p>Vehicles</p> <Vehicle className='bg-light-red w-5 h-5 rounded-sm'/> </div>
          <div className='font-bold text-md mt-12'> 200 </div>
          <div className='text-small'><span className='text-light-green pr-1'>↑ 20</span>More than yesterday </div>
        </div>
        <div className='w-1/5 bg-white rounded p-4'>
          <div className='flex justify-between font-medium'><p>Species</p> <Species className='bg-light-purple w-5 h-5 rounded-sm'/> </div>
          <div className='font-bold text-md mt-12'> 200 </div>
          <div className='text-small'><span className='text-light-green pr-1'>↑ 20</span>More than yesterday </div>
        </div>
      </div>
      <div className="m-4 bg-white pl-8 py-6" >
      <h2 className='mb-4 font-medium'>Films</h2>
      {loading ? (
            <div className='flex items-center justify-center'>
              <div
                className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-light-green border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span
                  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >
                  loading...
                </span>
                  <p>loading...</p>
              </div>
            </div>
          ) : (
        <div className='flex text-xs space-x-2 '>
          <div >
            <p className='text-inactive mb-5'>Film Title</p>
              <ul className='w-45 mr-5 space-y-4'>
                {films.map((film) => (
                  
                  <li key={film.title} className='flex space-x-2 items-center'> <Camcorder className='bg-light-green w-5 h-5 rounded-3xl'/> <p>{film.title}</p></li>
                ))}
              </ul>
          </div>
          <div>
            <p className='text-inactive mb-5'>Director</p>
              <ul className='w-25 mr-5 space-y-4'>
              {films.map((film) => (
                  <li key={film.episode_id} className='flex space-x-2 items-center'> <DirectorImg className='w-5 h-5'/> <p>{film.director}</p></li>
                ))}
              </ul>
          </div>
          <div>
            <p className='text-inactive mb-5'>Producer</p>
              <ul className='w-25 mr-5 space-y-4'>
              {films.map((film) => (
                  <li key={film.episode_id} className='flex space-x-2 items-center'><DirectorImg className='w-5 h-5'/><p>{film.producer.split(',')[0].trim()}</p></li>
                ))}
              </ul>
          </div>
          <div>
            <p className='text-inactive mb-5'>Release Date</p>
              <ul className='w-30 mr-4  space-y-4'>
              {films.map((film) => (
                  <li key={film.episode_id} className='flex space-x-2 items-center'><p>{film.release_date}</p> <DirectorImg className='w-5 h-5 invisible'/></li>
                ))}
              </ul>
          </div>
          <div>
            <p className='text-inactive mb-5'>Episode ID</p>
              <ul className='w-25 mr-12  space-y-4'>
              {films.map((film) => (
                  <li key={film?.episode_id}className='flex space-x-2 items-center'><p>{film.episode_id}</p> <DirectorImg className='w-5 h-5 invisible'/></li>
                ))}
              </ul>
          </div>
          <div className='mx-5'>
            <p className='text-inactive mb-5'>Characters</p>
              <ul className='w-25 mr-5  space-y-4'>
              {films.map((film) => (
                  <li key={film.episode_id}className='flex space-x-2 items-center text-light-green'><p>{film.url}</p> <DirectorImg className='w-5 h-5 invisible'/></li>
                ))}
              </ul>
          </div>
        </div> 
        )}  
      </div>
    </div>
  )
}

export default Dashboard