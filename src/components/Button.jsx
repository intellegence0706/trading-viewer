'use client';
import Image from "next/image";
import React, { useState } from "react";
import dropdownImg from "@/assets/icons/dropdown.svg";

const Button = ({
    content,
    icon,
    btnEnabled,
    border,
    alert,
    other,
    textColor,
    clickState,
    fontSize,
    backgroundColor,
    custom,
    paddingCustom,
}) => {
  const [clicked, setClicked] = useState(clickState);
  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <div className={`
        ${ backgroundColor ? backgroundColor : `${clicked ? 'bg-black' : 'bg-gradient-black-gray' }` } 
        ${border ? border : 'rounded-md' }
        ${btnEnabled ? 'text-half-enabled': 'text-dark-disabled'}
        ${fontSize ? fontSize : 'text-size-12'}
        ${custom && custom}
        border-1 border-dark-gray cursor-pointer
        p-0.5 flex justify-center items-center 
        transition hover:bg-gray-700 relative min-w-6 min-h-6
      `} onClick={handleClick}>
        { icon && <Image src={icon} className="" alt="button icon" /> }
        { content && <span className={`
          ${paddingCustom ? paddingCustom : 'px-1.5'} 
          ${textColor === 'pink' ? 'text-pink-middle' : ''}`
          }>{content}</span> }
        { alert && <div className="absolute rounded-sm -top-0.5 -right-0.5 bg-red-400 w-1 h-1"></div> }
        { other === "dropdown" && <Image src={dropdownImg} alt="dropdown" /> }
    </div>
  );
};

export default Button;