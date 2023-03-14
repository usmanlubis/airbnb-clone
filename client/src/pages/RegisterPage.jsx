import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="grow mt-4">
      <h2 className="text-2xl text-center mb-8">Register</h2>
      <form className="flex flex-col max-w-md mx-auto gap-6">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="yourmail@mail.com" />
        <input type="password" placeholder="Your password" />
        <button type="submit" className="primary">Login</button>
      </form>
      <div className="text-center text-sm mt-2 text-slate-500">
        Already have an account?
        {' '}
        <Link className="underline text-black font-semibold" to="/airbnb-clone/login">Login Now</Link>
      </div>
    </div>
  );
}

export default RegisterPage;
