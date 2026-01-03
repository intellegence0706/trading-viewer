import React from "react";

const HorizontalButton = ({
    content,
}) => {
    return (
        <div className="p-0.5">
            <button className={`
                inline-flex flex-col items-center justify-center p-2 
                xl:border-b-1 border-transparent -mb-px hover:border-gray-300 
                w-full transition focus:border-pink-middle 
                text-dark-disabled text-size-11 focus:text-pink-middle
            `}>
                <span className="">{content}</span>
            </button>
        </div>
    );
};
  
export default HorizontalButton;