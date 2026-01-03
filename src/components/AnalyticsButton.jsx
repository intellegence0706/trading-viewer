import React from "react";

const AnalyticstButton = ({
    isBuy,
    text1,
    text2,
    roundSet,
    isOpened,
}) => {
    return (
        <div className="p-0.5">
            <button className={`
                inline-flex flex-col items-center justify-center p-2 
                border-b-1 border-transparent -mb-px w-full transition 
                ${isOpened && `
                    hover:border-gray-300 focus:bg-gradient-black-gray 
                    ${isBuy ? 'focus:border-b-green-middle3' : 'focus:border-b-red-middle'}
                `}  
                ${roundSet && roundSet}
            `}>
                <span className="text-dark-gray3 text-size-10">{text1}</span>
                <span className={`
                   ${isBuy ? 'text-green-middle3' : 'text-red-middle'}  text-size-11
                `}>{text2}</span>
            </button>
        </div>
    );
};
  
export default AnalyticstButton;