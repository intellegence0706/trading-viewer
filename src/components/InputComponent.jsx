'use client';
import Image from "next/image";
import React, { useState } from "react";

const InputComponent = ({
    color,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (state) => {
    setIsClicked(state);
  }

  return (
    <div className="rounded-[3] border-1 border-dark-disabled-opacity-3 size-3.5 p-[2] cursor-pointer" onClick={() => handleClick(!isClicked)}>
      {isClicked && 
        <div className={`w-2 h-2 rounded-[2] 
          ${color ? color : 'bg-pink-middle' }
        `} />
      }
    </div>
  );
};

export default InputComponent;