import React from 'react';
import TwoColorBackgroundPage from './pages/TwoColorBackgroundPage';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TwoColorBackgroundPage/>} />
      <Route path="dashboard" element={<Dashboard/>} />
    </Routes>
  );
}

export default App;
