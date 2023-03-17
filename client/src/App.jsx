import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Layout from './Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AccountPage from './pages/AccountPage';
import { UserContextProvider } from './Context/UserContext';

axios.defaults.baseURL = 'http://localhost:9000';
// axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/airbnb-clone" element={<Layout />}>
          <Route path="/airbnb-clone/" element={<HomePage />} />
          <Route path="/airbnb-clone/login" element={<LoginPage />} />
          <Route path="/airbnb-clone/register" element={<RegisterPage />} />
          <Route path="/airbnb-clone/account" element={<AccountPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
