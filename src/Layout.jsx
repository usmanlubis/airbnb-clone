import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header/Header';

function Layout() {
  return (
    <div className="p-4 min-h-screen flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
