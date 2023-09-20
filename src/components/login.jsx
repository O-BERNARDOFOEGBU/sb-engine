import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as TopLogo } from '../assets/undraw_Astronaut.svg';
import { ReactComponent as RocketLogo } from '../assets/rocket.svg';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // Function to handle email input changes
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateForm(newEmail, password);
  };

  // Function to handle password input changes
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validateForm(email, newPassword);
  };

  // Function to validate the form
  const validateForm = (newEmail, newPassword) => {
    const isEmailValid = newEmail.length > 0; // Basic email validation (non-empty)
    const isPasswordValid = newPassword.length >= 8 && /[a-zA-Z]/.test(newPassword) && /\d/.test(newPassword); // Password validation

    setIsFormValid(isEmailValid && isPasswordValid);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/dashboard')
    }
  };

  return (
    <div  className='flex space-x-80'>
      <div className='w-full'>
        <h1 className="text-xl font-semibold text-text-black ">Sign in to continue </h1>
        <h1 className="text-xl font-semibold text-text-black mb-8"> your account</h1>
        <form onSubmit={handleSubmit} >
          <div className="mb-4">
            <label htmlFor="email" className="block text-text-black font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-80 bg-gray-98 px-2 py-1 border border-gray-400 rounded  focus:outline-none focus:border-yellow"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-text-black  font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full bg-gray-98 px-2 py-1 border border-gray-400 rounded  focus:outline-none  focus:border-yellow"
              placeholder="Enter Strong Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
        
            <button
              type="submit"
              className={`w-full bg-black text-white font-medium py-2 px-4 mt-4 rounded ${
                isFormValid ? 'hover:bg-gray-900' : 'bg-gray-400 pointer-events-auto'
              }`}
              disabled={!isFormValid}
            >
              Sign In
            </button>
          
        </form>
      </div>
      <div>
        <TopLogo className="absolute top-4 right-4" />
        <RocketLogo className="hidden"/>
      </div>
    </div>
  );
}

export default Login;
