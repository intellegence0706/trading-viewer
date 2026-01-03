'use client';

import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ 
    buttonContent, 
    children,
    buttonWidth,
    childWidth,
    bottom,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <summary className={`cursor-pointer
            ${buttonWidth && buttonWidth}
        `}
        onClick={toggleDropdown} style={{ listStyle: 'none' }}>
        {buttonContent}
      </summary>
      {isOpen && (
        <ul className={`
            ${childWidth && childWidth}
            ${bottom ? 'left-0 bottom-12' : 'right-0 top-8'}
            absolute menu dropdown-content overflow-hidden
            border-1 border-dark-gray rounded-md bg-gradient-black-gray 
            p-3 gap-2 flex flex-col justify-center
        `}>
          {children}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;