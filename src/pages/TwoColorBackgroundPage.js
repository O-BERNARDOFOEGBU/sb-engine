import React from 'react';
import {ReactComponent as RocketLogo} from '../assets/rocketLogo.svg';
import Login from '../components/login';

const TwoColorBackgroundPage = () => {
  return (
    <div className="w-screen h-screen flex flex-row">
        <div className="w-1/3 bg-china-ivory flex flex-col items-center justify-center">
        <div className='pb-20'>
        <h1 className='text-2xl'> Welcome to Star Wars </h1>
        <h1 className='text-2xl'>the Clone Wars</h1>
        </div>
        <RocketLogo/>
        </div> 
        <div className="w-2/3 bg-White flex flex-col items-center justify-center">
            <Login/>
        </div> 
    </div>
  );
};

export default TwoColorBackgroundPage;
