import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div >
      <h1 className="text-2xl font-semibold mb-4">Sign in to continue to your account</h1>
      <form onSubmit={handleSubmit} >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Strong Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
       
          <button
            type="submit"
            className={`w-full bg-black text-white font-bold py-2 px-4 rounded ${
              isFormValid ? 'hover:bg-gray-900' : 'bg-gray-400 pointer-events-auto'
            }`}
            disabled={!isFormValid}
          >
            Sign In
          </button>
        
      </form>
    </div>
  );
}

export default Login;
