import Image from "next/image";
import Dropdown from "@/components/Dropdown";
import NormalButton from "@/components/NormalButton";

import airdropImg from "@/assets/icons/airdrop/Group 427321514.svg";
import airdropLineImg from "@/assets/icons/airdrop/Rectangle 3943.svg";
import airdropLineShadowImg from "@/assets/icons/airdrop/Rectangle 3941.svg";
import airdropBackgroundImg from "@/assets/icons/airdrop_background.png";
import vectorImg from "@/assets/icons/Vector.svg";
import solanaImg from "@/assets/icons/solana_color.svg";
import linkImg from "@/assets/icons/link.svg";
import clockImg from "@/assets/icons/clock.svg";
import circleImg from "@/assets/icons/circle_chain.svg";
import peopleImg from "@/assets/icons/people.svg";

const AirdropButton = () => {
    return (
        <Dropdown buttonContent={
            <div className="w-7 relative hover:brightness-135 transition rounded-md">  
              <Image src={airdropLineShadowImg} alt="rectangle" width={45} />
              <Image src={airdropLineImg} alt="rectangle" width={22} className="absolute top-[3] left-[3]" />
              <Image src={airdropImg} alt="rectangle" width={16} className="absolute top-[6] left-[6]" />
            </div>
          } childWidth="w-70">
            <div className="gap-2 flex flex-col justify-center">
              <Image src={airdropBackgroundImg} alt="background" className="absolute w-55 -top-13 -left-21" />
              <div className="absolute rounded-md bg-gradient-to-t from-dark-gray5  w-full h-full left-0 z-10"></div>
              <div className="absolute rounded-md bg-gradient-to-b from-dark-gray-opacity-4 w-full h-[50%] left-0 top-0 z-30"></div>
              <div className="absolute left-3 -top-7 w-20 h-20 rounded-[50%] bg-dark-disabled-opacity-1"></div>
              <div className="absolute -left-14 top-17 w-20 h-20 rounded-[50%] bg-dark-disabled-opacity-1"></div>
              
              <form method="dialog" className="z-50 flex justify-end">
                <button className="btn hover:brightness-125 transition"><Image src={vectorImg} alt="exit" /></button>
              </form>

              <div className="z-30 text-center">
                <span className="font-federation-bold text-size-14 text-white">AIRDROP LIVE</span>
              </div>

              <div className="z-30 flex justify-center items-center space-x-2 text-size-12">
                <div className="rounded-[50%] py-2 pl-2 pr-1 bg-dark-gray">
                  <Image src={solanaImg} alt="solana" width={25} />
                </div>
                <div className="flex items-end justify-center gap-2">
                  <span className="text-size-13 text-white">0.288</span>
                  <span className="text-size-9 text-dark-disabled pb-0.5">SOL</span>
                </div>
              </div>

              <div className="z-30 flex justify-between items-center text-size-10 rounded-2xl bg-dark-gray4 px-5 py-1.5 mx-3">
                <span className="text-dark-disabled">Rewards Tier</span>
                <div className="flex items-center gap-1">
                  <Image src={linkImg} alt="link" />
                  <span className="text-red-yellow">Novice</span>
                </div>
              </div>
              
              <div className="z-30 flex justify-between items-center mx-3 my-2">
                <div className="flex items-center gap-3">
                  <div className="rounded-[50%] p-1 bg-dark-gray">
                    <Image src={clockImg} alt="clock" />
                  </div>
                  <span className="text-size-12 text-white font-manrope-bold">03:05</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-[50%] p-1 bg-dark-gray">
                    <Image src={circleImg} alt="circle" />
                  </div>
                  <span className="text-size-12 text-white font-manrope-bold">0.05%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-[50%] p-1 bg-dark-gray">
                    <Image src={peopleImg} alt="people" />
                  </div>
                  <span className="text-size-12 text-white font-manrope-bold">5331</span>
                </div>
              </div>

              <div className="flex justify-center items-center z-30 mx-3">
                <NormalButton 
                  content="Join Airdrop" 
                  fontColor="text-white" 
                  borderRound="rounded-2xl" 
                  size="w-full" 
                  background="bg-pink-middle" 
                  hover="hover:bg-blue-300" 
                  padding="py-1.5" 
                  border="border-none" 
                  shadow="shadow-custom-white"
                />
              </div>
            </div>
          </Dropdown>
    );
};
  
export default AirdropButton;