import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  const [headerText, setHeaderText] = useState('Dashboard')
  return (
    <div className="flex h-screen">
      <Sidebar setHeaderText={setHeaderText}/>
      <main className="w-5/6  bg-white-smoke">
        <Header headerText={headerText}/>
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;
