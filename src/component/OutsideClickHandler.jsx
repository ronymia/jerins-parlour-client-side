import React, { useRef, useEffect } from 'react';

const OutsideClickHandler = ({ onOutsideClick, children }) => {
  const OutsideHandlerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (OutsideHandlerRef.current && !OutsideHandlerRef.current.contains(event.target)) {
        onOutsideClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOutsideClick]);

  return <div ref={OutsideHandlerRef}>{children}</div>;
};

export default OutsideClickHandler;
