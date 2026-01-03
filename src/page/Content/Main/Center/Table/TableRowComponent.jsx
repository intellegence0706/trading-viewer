import React from "react";
import Image from "next/image";

import solanaImg from "@/assets/icons/solana_color.svg";
import dockerImg from "@/assets/icons/Group 427321040.svg";
import filterImg from "@/assets/icons/filter.svg";

const TableRowComponent = ({
    isBuy,
    isHyped,
    progress,
}) => {
    return (
        <tr className={`h-10
            ${isBuy ? "text-green-table" : "text-red-middle"}
        `}>
            <td className="px-6 py-2 whitespace-nowrap">1s</td>
            <td className="px-6 py-2 whitespace-nowrap">
                <div className={`rounded-sm py-1 px-2 w-6 
                    ${isBuy ? "bg-green-opacity-3" : "bg-red-opacity-3"} 
                `}>
                    {isBuy ? "B" : "S"} 
                </div>
            </td>
            <td className="px-6 py-2 whitespace-nowrap">
                $0.0331528
            </td>
            <td className="px-6 py-2 whitespace-nowrap">
                <div className="flex items-center gap-2 relative">
                    <span>671.22k</span>
                    <div className={`bg-linear-to-r h-10 absolute left-12.5
                       ${isBuy ? 'from-green-opacity-002 to-green-opacity-015' : 'from-red-opacity-002 to-red-opacity-015'}  
                    `} style={{width: `${progress}%`}}></div>
                </div>
            </td>
            <td className="px-6 py-2 whitespace-nowrap">
                <div className="flex items-center gap-2">
                    <span>0.9924</span>
                    <Image src={solanaImg} alt="solana" className="min-w-3" />
                </div>
            </td>
            <td className="px-6 py-2 whitespace-nowrap">
                <div className="flex justify-end items-center gap-2">
                    <Image src={dockerImg} alt="docker" className="min-w-4" />
                    <span className={`
                        ${isHyped && "text-yellow-table"}  
                    `}>
                        {isHyped ? "Hyped" : "Wk2CI8uY1"}
                    </span>
                    <div className="rounded-sm text-dark-disabled bg-gradient-black-gray px-2 py-1">5</div>
                    <Image src={filterImg} alt="filter" className="min-w-4" />
                </div>
            </td>
        </tr>
    );
};
  
export default TableRowComponent;