import Image from "next/image";

import logoImg from "@/assets/icons/logo.svg";
import copyImg from "@/assets/icons/copy.svg";
import shareImg from "@/assets/icons/share.svg";
import worldImg from "@/assets/icons/world.svg";
import solanaImg from "@/assets/icons/solana-dark.svg";
import searchImg from "@/assets/icons/search-alt_svgrepo_small.com.svg";
import xImg from "@/assets/icons/X.svg";
import pumpImg from "@/assets/icons/pump.svg";
import lockImg from "@/assets/icons/lock.svg";
import exclamationImg from "@/assets/icons/exclamation2.svg";
import NormalButton from "@/components/NormalButton";


const ChartTopComponent = () => {
    return (
      <div className="rounded-md bg-black-gray p-2 text-size-12">
        <div className="flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center gap-2">
            <div className="flex justify-start items-center gap-2 w-full 2xl:w-[40%]">
                <Image src={logoImg} alt="logo" />
                <div className="flex flex-col">
                    <div className="flex justify-start items-center gap-1">
                        <Image src={pumpImg} alt="pump" />
                        <span className="text-white text-size-15 font-manrope-bold">Pltnm</span>
                        <span className="text-dark-disabled ">Pltnm Primate</span>
                    </div>
                    <div className="flex justify-start items-center gap-1 flex-col md:flex-row md:flex-wrap">
                        <div className="flex gap-1 items-center">
                            <span className="text-green-middle3 ">11h</span>
                            <p className="truncate w-[120px] text-dark-disabled-opacity-6 ">kdhfw982r9823hfsd9092323598fjdfka98fq3fdif98hf9oweiu9283hf9q8wef</p>
                        </div>

                        <div className="flex flex-wrap">
                            <NormalButton prefixIcon={copyImg} border="border-none" size="w-5 h-5" padding="p-[1]"/>
                            <NormalButton prefixIcon={searchImg} border="border-none" size="w-5 h-5" padding="p-[1]" />
                            <NormalButton prefixIcon={xImg} border="border-none" size="w-5 h-5" padding="p-[1]"/>
                            <NormalButton prefixIcon={worldImg} border="border-none" size="w-5 h-5" padding="p-[1]"/>
                            <NormalButton prefixIcon={solanaImg} border="border-none" size="w-5 h-5" padding="p-[1]"/>
                            <NormalButton prefixIcon={shareImg} border="border-none" size="w-5 h-5" padding="p-[1]"/>
                            <span className="text-dark-disabled">Share</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clarify section */}
            <div className="flex flex-wrap gap-2 justify-between items-center w-full 2xl:w-[60%]">
                {/* Price */}
                <div className="flex flex-col gap-1">
                    <span className="text-dark-disabled">Price</span>
                    <span className="text-white text-size-13">$0.013332</span>
                </div>
                {/* Mkt Cap */}
                <div className="flex flex-col gap-1">
                    <span className="text-dark-disabled">Mkt Cap</span>
                    <span className="text-cyan-middle text-size-13">$13.74K</span>
                </div>
                {/* Liquiduity */}
                <div className="flex flex-col gap-1">
                    <span className="text-dark-disabled">Liquiduity</span>
                    <div className="flex items-center gap-1">
                        <span className="text-white text-size-13">$5.4K</span>
                        <Image src={lockImg} alt="lock" className="pb-0.5" />        
                    </div>
                </div>
                {/* Supply */}
                <div className="flex flex-col gap-1">
                    <span className="text-dark-disabled">Supply</span>
                    <span className="text-white text-size-13">1B</span>
                </div>
                {/* B.Curve */}
                <div className="flex flex-col gap-1">
                    <span className="text-dark-disabled">B.Curve</span>
                    <div className="flex justify-center items-center gap-1">
                        <span className="text-green-from text-size-13">72.65%</span>
                        <Image src={pumpImg} alt="lock" className="pb-0.5" />        
                    </div>
                </div>
                {/* Audit Component */}
                <div className="flex flex-col gap-1">
                    <span className="text-dark-disabled">Audit</span>
                    <div className="flex items-center gap-1 hover:contrast-200 hover:brightness-125 transition">
                        <Image src={exclamationImg} alt="lock" className="pb-0.5" />        
                        <span className="text-yellow-middle text-size-13">Caution</span>
                        <div className="bg-yellow-middle-opacity-1 py-0.5 px-2 rounded-sm ml-2">
                            <span className="font-manrope-bold text-yellow-middle">6/8</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default ChartTopComponent;