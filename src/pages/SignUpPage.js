import React from 'react';
import Login from '../components/Login';
import { ReactComponent as RocketLogo } from '../assets/rocket.svg';
import { ReactComponent as TopLogo } from '../assets/undraw_Astronaut.svg';

const SignUpPage = () => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-1/3 bg-china-ivory flex flex-col items-center justify-center">
        <div className="pb-20">
          <h1 className="text-xll font-medium">Welcome to Star Wars</h1>
          <h1 className="text-xll font-medium">the Clone Wars</h1>
        </div>
        <RocketLogo />
        <TopLogo className='hidden'/>
      </div>
      <div className="w-2/3 bg-White flex flex-col items-center justify-center">
        <Login/>
      </div>
    </div>
  );
};

export default SignUpPage;
