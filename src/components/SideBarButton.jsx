import Image from "next/image";
import React from "react";
import horizontalLineImg from "@/assets/icons/Rectangle 12.png";

const SideBarButton = ({
    content,
    icon,
    btnEnabled,
    handleClick,
}) => {
  return (
    <div className={`
      flex items-center justify-center w-17 py-0.5
      `}
      onClick={handleClick}>
        <div className={`
          flex flex-col justify-center items-center text-center transition
          ${btnEnabled !== true ? 'hover:contrast-250 hover:brightness-150' : '' } 
          ${btnEnabled === true ? 'contrast-250 brightness-150' : '' }
        `}>
            <Image src={icon} alt="button icon" className="w-fit" />
            <span className={`font-manrope-bold text-size-12 ${btnEnabled === true ? 'text-indigo-400' : 'text-dark-disabled'}`}>{content}</span>
        </div>
        { btnEnabled && <Image src={horizontalLineImg} alt="hor line" className="fixed left-16.5 z-999" /> }
    </div>
  );
};

export default SideBarButton;