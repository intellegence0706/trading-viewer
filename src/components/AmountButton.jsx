import React from "react";
import Image from "next/image";

const AmountButton = ({
    content,
    icon,
    width,
}) => {
    return (
        <button className={`flex justify-center items-center rounded-sm border-dark-gray8 border-1
         bg-dark-gray p-1.5 hover:bg-gray-700 transition focus:bg-gray-900
         ${width && width}
         `}>
            {content}
            {icon && <Image src={icon} alt="setting" width={15} />}
        </button>
    );
};
  
export default AmountButton;