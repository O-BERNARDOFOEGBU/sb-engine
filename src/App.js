import React from 'react';
import SignUpPage from './pages/SignUpPage';
import {Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Layout from './components/shared/Layout';
import Vehicles from './components/Vehicles';
import Starships from './components/Starships';
import People from './components/People';
import Species from './components/Species';


function App() {
return (
    <Routes>
      <Route path="/" element={<SignUpPage/>} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/starships" element={<Starships/>} />
          <Route path="/dashboard/people" element={<People />} />
          <Route path="/dashboard/vehicles" element={<Vehicles />} />
          <Route path="/dashboard/species" element={<Species />} />
        </Route>
    </Routes>
  );
}

export default App;

