import Image from "next/image";

import targetImg from "@/assets/icons/target.svg";
import groupImg from "@/assets/icons/group3.svg";
import windImg from "@/assets/icons/wind.svg";
import leaveImg from "@/assets/icons/leave.svg";
import repoImg from "@/assets/icons/box_svgrepo.com.svg";
import fireImg from "@/assets/icons/fire.svg";
import group2Img from "@/assets/icons/group2.svg";
import warnImg from "@/assets/icons/warn.svg";
import filterImg from "@/assets/icons/filter.svg";

const FilterComponent = () => {
    return (
        <div className="rounded-md border-dark-gray border-1 p-2.5 flex flex-col gap-2">
            <div className="grid grid-cols-4 gap-2 text-size-11 text-dark-disabled">
                <div className="border-1 rounded-md border-dark-gray p-2 bg-gradient-black-gray flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center gap-1">
                        <Image src={targetImg} alt="target" />
                        <span className="text-white">0.83%</span>
                    </div>
                    <span className="text-size-8">Snipers</span>
                </div>
                <div className="border-1 rounded-md border-dark-gray p-2 bg-gradient-black-gray flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center gap-1">
                        <Image src={groupImg} alt="group" />
                        <span className="text-yellow-middle2">24.49%</span>
                    </div>
                    <span className="text-size-8">Top 10H.</span>
                </div>
                <div className="border-1 rounded-md border-dark-gray p-2 bg-gradient-black-gray flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center gap-1">
                        <Image src={windImg} alt="wind" />
                        <span className="text-red-middle">3.8%</span>
                    </div>
                    <span className="text-size-8">Insiders</span>
                </div>
                <div className="border-1 rounded-md border-dark-gray p-2 bg-gradient-black-gray flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center gap-1">
                        <Image src={leaveImg} alt="leave" />
                        <span className="text-green-middle4">3.8%</span>
                    </div>
                    <span className="text-size-8">Dev H</span>
                </div>
                <div className="border-1 rounded-md border-dark-gray p-2 bg-gradient-black-gray flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center gap-1">
                        <Image src={repoImg} alt="repo" />
                        <span className="text-white">2.17%</span>
                    </div>
                    <span className="text-size-8">Bundlers</span>
                </div>
                <div className="border-1 rounded-md border-dark-gray p-2 bg-gradient-black-gray flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center gap-1">
                        <Image src={fireImg} alt="fire" />
                        <span className="text-white">100%</span>
                    </div>
                    <span className="text-size-8">LP Burned</span>
                </div>
                <div className="border-1 rounded-md border-dark-gray p-2 bg-gradient-black-gray flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center gap-1">
                        <Image src={group2Img} alt="group" />
                        <span className="text-white">1222</span>
                    </div>
                    <span className="text-size-8">Holders</span>
                </div>
                <div className="border-1 rounded-md border-dark-gray p-2 bg-gradient-black-gray flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center gap-1">
                        <Image src={warnImg} alt="group" />
                        <span className="text-red-middle">Unpaid</span>
                    </div>
                    <span className="text-size-8">Dex Paid</span>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-2 text-size-10 text-dark-disabled">
                <div className="border-1 rounded-md border-dark-gray px-2 py-1 bg-gradient-black-gray flex justify-between items-center">
                    <span>CA Deployer</span>
                    <div className="flex justify-center items-center gap-2">
                        <span>zdJUkB</span>
                        <div className="rounded-sm bg-dark-gray p-0.5 hover:bg-gray-800 transition">
                            <Image src={filterImg} alt="filter"  />
                        </div>
                    </div>
                </div>
                <div className="border-1 rounded-md border-dark-gray px-2 py-1 bg-gradient-black-gray flex justify-between items-center">
                    <span>LP Creator</span>
                    <div className="flex justify-center items-center gap-2">
                        <span>quYfgYt</span>
                        <div className="rounded-sm bg-dark-gray p-0.5 hover:bg-gray-800 transition">
                            <Image src={filterImg} alt="filter"  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default FilterComponent;