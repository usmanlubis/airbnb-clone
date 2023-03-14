import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Layout from './Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

axios.defaults.baseURL = 'http://localhost:9000';

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
