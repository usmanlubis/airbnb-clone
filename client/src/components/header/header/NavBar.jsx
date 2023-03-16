import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Context/UserContext';

function NavBar() {
  const { user } = useContext(UserContext);
  const [loginRegister, setLoginRegister] = useState(false);
  return (
    <nav className="hidden md:flex justify-between items-center gap-1">
      <p className="cursor-pointer p-2 px-4 -mr-3 rounded-3xl hover:bg-bnb-icon/10">Airbnb your home</p>
      <div className="p-2 rounded-3xl cursor-pointer hover:bg-bnb-icon/10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      </div>
      <button type="button" onClick={() => setLoginRegister(!loginRegister)} className="flex gap-1 justify-between items-center cursor-pointer p-2 rounded-3xl border-2 border-gray-400/30 hover:shadow-md hover:shadow-gray-200 relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-bnb-icon">
          <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
        </svg>
        {!!user && (
          <div>
            {user.name}
          </div>
        )}
        <div className={loginRegister === true ? 'w-[225px] border-2 shadow-xl py-2 rounded-xl text-slate-600 absolute top-12 right-0' : 'w-[225px] border-2 shadow-xl py-2 rounded-xl text-slate-600 hidden top-12 right-0'}>
          <Link className="text-left px-4 py-2 block hover:bg-black/10 font-[500]" to="/airbnb-clone/register">Sign up</Link>
          <Link className="text-left px-4 py-2 block hover:bg-black/10" to="/airbnb-clone/login">Log in</Link>
        </div>
      </button>
    </nav>
  );
}

export default NavBar;
