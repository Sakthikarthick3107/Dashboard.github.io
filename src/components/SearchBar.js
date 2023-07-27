import React from 'react';
import {SearchIcon} from '@heroicons/react/outline'

const SearchBar = ({ onChange }) => {
  return (
    <div className="flex items-center border p-2 rounded-md border-neutral-300 ">
      <div className="flex justify-start">
      <input
        type="text"
        placeholder="Search content..."
        className="p-2 rounded-l-md border-t  border-b border-l border-white text-gray-800 bg-white focus:border-white"
        onChange={onChange} in
      />
      </div>
      <div className="flex justify-end">
      <button className=" rounded-r-md  text-black"><SearchIcon className="text-black h-10  rounded-l "/></button>
      </div>
    </div>
  );
};

export default SearchBar;
