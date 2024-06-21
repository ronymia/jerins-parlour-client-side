import React, { useState } from 'react';

const CustomSelect = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleOption = (option) => {
        if (selectedOption === option) {
            setSelectedOption(null); // Deselect if already selected
        } else {
            setSelectedOption(option); // Select the clicked option
        }
        setMenuOpen(false); // Close the menu after selecting an option
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    console.log(selectedOption)

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    onClick={toggleMenu}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    aria-haspopup="true"
                    aria-expanded={menuOpen ? 'true' : 'false'}
                >
                    {selectedOption || 'Select an option'}
                </button>
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
                                className={`${selectedOption === option
                                    ? 'text-white bg-indigo-600'
                                    : 'text-gray-900'
                                    } cursor-pointer block px-4 py-2 text-sm text-black`}
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


export default CustomSelect;
