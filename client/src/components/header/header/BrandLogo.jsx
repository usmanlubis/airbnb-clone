import React from 'react';
import { Link } from 'react-router-dom';

function BrandLogo() {
  return (
    <Link href="/airbnb-clone" className="hidden md:flex gap-1 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-bnb-pink -rotate-90"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        />
      </svg>
      <p className="text-2xl text-bnb-pink font-bold">airbnb</p>
    </Link>
  );
}

export default BrandLogo;
