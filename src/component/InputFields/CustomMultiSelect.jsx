import React, { useState } from 'react';

const CustomMultiSelect = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedValues, setSelectedValues] = useState([])

  const handleOptionToggle = (option) => {
    const index = selectedOptions.findIndex((item) => item.value === option.value);
    if (index !== -1) {
      setSelectedOptions(selectedOptions.filter((item) => item.value !== option.value));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  console.log(selectedOptions)

  return (
    <div className="relative w-60">
      <div className="flex flex-wrap bg-white border border-gray-300 rounded-md shadow-lg mt-1 w-full min-h-[50px] min-w-[240px]">


        {selectedOptions.length > 0 &&
          selectedOptions.map((value, i) => {
            return <div className="">{value}</div>
          })
        }
        {/* {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
            <input
              // onSelect={}
              type="checkbox"
              checked={selectedOptions.some((item) => item.value === option.value)}
              onChange={() => handleOptionToggle(option)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="text-gray-700">{option.label}</span>
          </label>
        ))} */}
      </div>
      <div className="absolute top-full left-0 z-10 bg-white border border-gray-300 rounded-md shadow-lg mt-1 w-full">
        {options.map((option) => (
          <div key={option.value} className="px-4 py-2">
            <button
              type="button"
              onClick={() => {
                setSelectedOptions([...selectedOptions, option.value])
              }}
            >
              {option.label}
            </button>
          </div>
        ))}
      </div>
    </div >
  );
};

export default CustomMultiSelect;
