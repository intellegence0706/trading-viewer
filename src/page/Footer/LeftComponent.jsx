'use client'

import Image from "next/image";
import Button from "@/components/Button";

import setImg from "@/assets/icons/set.svg";
import eWalletImg from "@/assets/icons/solana_color.svg";
import alertImg from "@/assets/icons/alert.svg";
import xImg from "@/assets/icons/X.svg";
import trackerImg from "@/assets/icons/tracker.svg";
import lineImg from "@/assets/icons/line_black.png";
import bitcoinImg from "@/assets/icons/Bitcoin.svg";
import ethereumImg from "@/assets/icons/Ethereum.svg";
import WalletComponent from "./Wallet";

import { useAlertStore } from "@/utils/alertStore";

const LeftComponent = () => {
    const { clicked, setClickState } = useAlertStore();
    const handleClick = (state) => {
      setClickState(state);
    }

    return (
      <div className="flex justify-around items-center">
          {/* Preset Button */}
          <div className="min-w-20 ">
            <Button content="Preset1" icon={setImg} border="border-0 rounded-2xl" textColor="pink" backgroundColor="bg-pink-opacity-1" fontSize="text-size-10" />
          </div>
          
          {/* Wallet */}
          <WalletComponent />
          
          {/* Line */}
          <Image src={lineImg} alt="line" className="px-2 w-fit" />

          {/* Alert */}
          <div className={`
            min-w-20 flex justify-center hover:bg-gray-800 transition px-2 py-1 rounded-sm cursor-pointer
            ${clicked && 'bg-black-gray'}
          `} onClick={() => handleClick(!clicked)}>
            <Image src={alertImg} alt="alert" />
            <span className="font-manrope-bold text-size-12 text-dark-disabled px-1">
                Alerts
            </span>
            <div className="font-manrope-bold text-size-10 text-white bg-red-common rounded-lg h-4 min-w-4 ml-1 flex justify-center items-center">
                15
            </div>
          </div>

          {/* Line */}
          <Image src={lineImg} alt="line" className="px-2 w-fit max-sm:hidden" />

          {/* X twitter track */}
          <div className="min-w-35 flex justify-center max-sm:hidden hover:bg-gray-800 transition px-2 py-1 rounded-sm cursor-pointer">
            <Image src={xImg} alt="twitter" />
            <span className="font-manrope-bold text-size-12 text-dark-disabled px-1">
                Twitter Tracker
            </span>
            <div className="font-manrope-bold text-size-10 text-white bg-red-common rounded-lg h-4 min-w-4 ml-1 flex justify-center items-center">
                15
            </div>
          </div>

          {/* Line */}
          <Image src={lineImg} alt="line" className="px-2 w-fit max-mmd:hidden" />

          {/* PnL Tracker */}
          <div className="min-w-25 flex justify-center max-mmd:hidden hover:bg-gray-800 transition px-2 py-1 rounded-sm cursor-pointer">
            <Image src={trackerImg} alt="tracker" />
            <span className="font-manrope-bold text-size-12 text-dark-disabled px-1">
                PnL Tracker
            </span>
          </div>

          {/* hidden part */}
          <div className="hidden xl:flex xl:justify-around xl:items-center">
            {/* Line */}
            <Image src={lineImg} alt="line" className="px-2 w-fit" />

            {/* Wallet */}
            <div className="min-w-20 flex justify-center items-center">
              <Image src={eWalletImg} alt="wallet" className="h-3" />
              <span className="font-manrope-bold text-size-12 px-1 text-green-middle">
                  $133.42
              </span>
            </div>

            {/* Bitcoin */}
            <div className="min-w-20 flex justify-center items-center">
              <Image src={bitcoinImg} alt="bitcoin" />
              <span className="font-manrope-bold text-size-12 px-1 text-dark-yellow">
                  $133.42
              </span>
            </div>

            {/* Ethereum */}
            <div className="min-w-20 flex justify-center items-center">
              <Image src={ethereumImg} alt="ethereum" />
              <span className="font-manrope-bold text-size-12 px-1 text-dark-green">
                  $133.42
              </span>
            </div>
          </div>
      </div>
    );
};
  
export default LeftComponent;