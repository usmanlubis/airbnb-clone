import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiFilter } from 'react-icons/bi';

function SearchBar() {
  return (
    <>
      <div className="hidden md:flex gap-4 items-center p-2 pl-4 border-2 border-gray-400/30 rounded-3xl shadow-md shadow-gray-200 ml-[180px]">
        <div>Anywhere</div>
        <div className="border-r border-gray-400 h-6" />
        <div>Any week</div>
        <div className="border-r border-gray-400 h-6" />
        <div>Any guest</div>
        <button type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-bnb-pink">
            <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="flex md:hidden w-full justify-between items-center gap-0 shadow-xl rounded-full border-2">
        <button type="button" className="flex items-center gap-4 basis-[90%] text-left p-2 pl-4">
          <AiOutlineSearch size={22} className="text-slate-700" />
          <div>
            <p className="font-[600] text-slate-900 -mb-1">Anywhere</p>
            <div>
              <p className="text-[0.8rem] text-slate-500">Any week&nbsp;&nbsp;.&nbsp;&nbsp;Add guest</p>
            </div>
          </div>
        </button>
        <button type="button" className="text-left basis-[10%] p-2">
          <BiFilter size={35} className="border rounded-full p-1 shadow-xl" />
        </button>
      </div>
    </>
  );
}

export default SearchBar;
