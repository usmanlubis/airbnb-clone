import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/airbnb-clone" element={<Layout />}>
        <Route path="/airbnb-clone/" element={<HomePage />} />
        <Route path="/airbnb-clone/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
