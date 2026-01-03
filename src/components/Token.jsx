import Image from "next/image";
import React from "react";
import logoImg from "@/assets/icons/item.svg";
import premiumImg from "@/assets/icons/premium.svg";

const Token = ({
    Premium,
}) => {
  return (
    <div className="border-1 border-dark-gray rounded-md
     bg-dark-gray5 flex items-center justify-between gap-2 
     p-2 font-manrope-bold text-size-9">
        <div className="flex gap-2 items-center">
            <Image src={logoImg} alt="logo" />
            <div className="flex flex-col gap-1 justify-center">
                <div className="flex justify-start items-center gap-1">
                    {Premium && <Image src={premiumImg} alt="premium" />}
                    <span className="text-white">PL</span>
                    <span className="text-dark-disabled">PLTNM PRIMATE</span>
                    <span className="text-red-middle">OG</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <span className="text-dark-disabled">Last TX:</span>
                        <span className="text-white">15h</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-dark-disabled">Holders</span>
                        <span className="text-white">12484</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-dark-disabled">VOL:</span>
                        <span className="text-pink-middle">5M</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-end gap-1">
            <span className="text-dark-disabled">Market Cap</span>
            <span className="text-cyan-white">$3.05M</span>
        </div>
    </div>
  );
};

export default Token;