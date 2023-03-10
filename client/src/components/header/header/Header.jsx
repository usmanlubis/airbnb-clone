import React from 'react';

import BrandLogo from './BrandLogo';
import SearchBar from './SearchBar';
import NavBar from './NavBar';

function Header() {
  return (
    <header className="flex justify-center md:justify-between items-center">
      <BrandLogo />
      <SearchBar />
      <NavBar />
    </header>
  );
}

export default Header;
