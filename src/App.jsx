import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path="/airbnb-clone" element={<Layout />}>
        <Route path="/airbnb-clone/" element={<HomePage />} />
        <Route path="/airbnb-clone/login" element={<LoginPage />} />
        <Route path="/airbnb-clone/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
