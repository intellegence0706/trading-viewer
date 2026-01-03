import Image from "next/image";

import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";
import NormalButton from "@/components/NormalButton";

import vectorImg from "@/assets/icons/Vector.svg";
import starImg from "@/assets/icons/star.svg";
import draggableImg from "@/assets/icons/draggable.svg";
import bitcoinImg from "@/assets/icons/Bitcoin_nonline.svg";
import ethereumImg from "@/assets/icons/Ethereum.svg";
import solanaImg from "@/assets/icons/solana_color.svg";
import plusImg from "@/assets/icons/plus_white.svg";

const StarComponent = () => {
    return (
        <Dropdown buttonContent={
            <Button icon={starImg} backgroundColor="bg-gradient-black-gray"/>
          } childWidth="w-70">
            <li className="flex justify-between items-center p-1">
              <div className="flex items-center justify-start gap-2">
                <Image src={draggableImg} alt="draggable" />
                <span className="font-manrope-bold text-size-13 text-dark-gray3">Watchlist</span>
              </div>
              <Image src={vectorImg} alt="exit" />
            </li>
            <div className="border-b-1 border-dark-gray -mx-3"></div>
            <li className="px-3 py-1.5">
                <div className="flex justify-start items-center gap-1">
                    <NormalButton prefixIcon={solanaImg} size="w-7 h-7" padding="pl-0.5" imageSize="w-4"/>
                    <NormalButton prefixIcon={bitcoinImg} size="w-7 h-7" imageSize="w-5" />
                    <NormalButton prefixIcon={ethereumImg} size="w-7 h-7" padding="py-1" imageSize="w-5"/>
                </div>
                <div className="h-50 flex flex-col justify-center items-center gap-2 text-size-12">
                    <span className="text-dark-gray3">Your watchlist is empty</span>
                    <div className="border-1 border-dark-gray w-35 rounded-md p-1.5 flex justify-center items-center gap-2 hover:bg-gray-800 transition cursor-pointer">
                        <div className="flex justify-center items-center p-0.5 rounded-2xl bg-pink-middle">
                            <Image src={plusImg} alt="plus" />
                        </div>
                        <span className="text-white">Add first token</span>
                    </div>
                </div>
            </li>
          </Dropdown>
    );
  };
  
  export default StarComponent;