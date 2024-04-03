import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";

export default function CustomDropdown({ label, dropdownItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="inline-block relative">
      <div className="py-2 px-3 bg-[#f0f0f0] border border-[#ccc]" onClick={toggleDropdown}>
        {selectedItem || label}
      </div>
      <div className={`absolute ${isOpen ? "flex" : "hidden"} top-[calc(100% + 4px)] left-0 bg-white border border-solid border-[#ccc] border-t-0 shadow-[0px 4px 8px rgba(0, 0, 0, 0.1)] max-h-[200px]`}>
        {dropdownItems?.map((item) => (
          <div
            key={item}
            className="py-2 px-3 cursor-pointer hover:bg-[#f0f0f0]"
            onClick={() => handleItemClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

CustomDropdown.propTypes = {
  dropdownItems: PropTypes.array,
}