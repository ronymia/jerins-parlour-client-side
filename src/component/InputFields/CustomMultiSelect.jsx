import React, { useState } from 'react';

const CustomMultiSelect = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleOption = (option) => {
    const isSelected = selectedOptions.includes(option);
    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            aria-haspopup="true"
            aria-expanded={menuOpen ? 'true' : 'false'}
          >
            Select Options
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 11a1 1 0 100 2h12a1 1 0 100-2H4a1 1 0 00-1 1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
      {menuOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => toggleOption(option)}
                className={`${
                  selectedOptions.includes(option)
                    ? 'text-white bg-indigo-600'
                    : 'text-gray-900'
                } cursor-pointer block px-4 py-2 text-sm`}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Usage
function App() {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Custom Multi-Select</h1>
      <CustomMultiSelect options={options} />
    </div>
  );
}

export default CustomMultiSelect;
