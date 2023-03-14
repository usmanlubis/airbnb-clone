import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="grow mt-4">
      <h2 className="text-2xl text-center mb-8">Login</h2>
      <form className="flex flex-col max-w-md mx-auto gap-6">
        <input type="email" placeholder="yourmail@mail.com" />
        <input type="password" placeholder="Your password" />
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

export default Login;
