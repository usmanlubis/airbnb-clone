import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function regist(event) {
    event.preventDefault();
    axios.get('https://localhost:9000/test');
  }
  return (
    <div className="grow mt-4">
      <h2 className="text-2xl text-center mb-8">Register</h2>
      <form className="flex flex-col max-w-md mx-auto gap-6" onSubmit={regist}>
        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="yourmail@mail.com" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Your password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="primary">Sign Up</button>
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
