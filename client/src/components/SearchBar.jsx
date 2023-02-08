import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar flex gap-2 items-center p-2 border-2 border-bnb-icon/30 rounded-3xl">
      <p className="border-r border-bnb-icon/30 pr-2">Anywhere</p>
      <p className="border-r border-bnb-icon/30 pr-2">Any week</p>
      <p>Add guest</p>
      <button type="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-bnb-pink">
          <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
