// components/IconSelect.js
import React from 'react';

const IconSelect = ({ options, icon, ...rest }) => {
  return (
    <div className="relative">
      <select
        {...rest}
        className="block appearance-none w-full bg-white border border-gray-300 
          hover:border-gray-400 px-4 py-2 pr-10 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 12a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M10 20a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M10 4a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default IconSelect;
