import React from 'react';

import BrandLogo from './BrandLogo';
import SearchBar from './SearchBar';
import NavBar from './NavBar';

function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8">
      <BrandLogo />
      <SearchBar />
      <NavBar />
    </header>
  );
}

export default Header;
