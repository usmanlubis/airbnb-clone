import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function loginHandler(e) {
    e.preventDefault();
    try {
      await axios.post('/login', { email, password });
      window.alert('Login successfull');
      setRedirect(true);
    } catch (e) {
      window.alert('Login failed');
    }
  }

  if (redirect) {
    return <Navigate to="/airbnb-clone" />;
  }
  return (
    <div className="grow mt-4">
      <h2 className="text-2xl text-center mb-8">Login</h2>
      <form className="flex flex-col max-w-md mx-auto gap-6" onSubmit={loginHandler}>
        <input type="email" placeholder="yourmail@mail.com" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Your password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="primary">Login</button>
      </form>
      <div className="text-center text-sm mt-2 text-slate-500">
        Don&apos;t have an account?
        {' '}
        <Link className="underline text-black font-semibold" to="/airbnb-clone/register">Sign Up Now</Link>
      </div>
    </div>
  );
}

export default LoginPage;
