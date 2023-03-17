import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

const AccountPage = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to='/airbnb-clone/login' />;
  }

  return (
    <div>AccountPage</div>
  );
};

export default AccountPage;