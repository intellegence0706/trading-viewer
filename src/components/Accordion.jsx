'use client';

import React, { useState } from 'react';

const Accordion = ({
  children,
}) => {
  
  const [isOpened, setIsOpened] = useState(true);

  const toggleItem = (param) => {
    setIsOpened(param);
  };

  return (
    <div className={`w-full border-1 rounded-md border-dark-gray p-3`}>
        <button
          type="button"
          onClick={() => toggleItem(!isOpened)}
          className={`w-full flex items-center gap-2 text-left cursor-pointer transition-all
            ${isOpened && 'pb-3'}
            `}
          aria-expanded={isOpened}
          aria-controls={`accordion-content`}
        >
          <span className="font-manrope-bold text-size-10">Similar Tokens</span>
          <svg
            className={`w-3 h-3 transition-all duration-400 
              ${isOpened && 'transform rotate-180'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          id={`accordion-content`}
          className={`overflow-hidden transition-all duration-200 
            ${isOpened ? 'max-h-screen' : 'max-h-0'}
          `}
        >
          {children}
        </div>
    </div>
  );
};

export default Accordion;