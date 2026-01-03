import Image from "next/image";
import React from "react";
import copyImg from "@/assets/icons/copy.svg";
import groupImg from "@/assets/icons/Group 48097638.svg";
import supabaseImg from "@/assets/icons/Group 48097639.svg";
import docImg from "@/assets/icons/Group 48097640.svg";
import aiImg from "@/assets/icons/Group 48097641.svg";
import targetImg from "@/assets/icons/Group 48097642.svg";
import repoImg from "@/assets/icons/box_svgrepo.com.svg";

const Item = ({
    icon,
    border,
    successScore,
}) => {
    return (
      <div className={`
        rounded-lg border-1 py-2 pl-2 pr-3
        ${border}
      `}>
        <div className="flex justify-center items-start relative">
            <Image src={icon} alt="icon" className="min-w-8" />
            <div className="flex flex-col ml-2 w-full">
                <div className="flex justify-between items-center space-x-2">
                    <span className="text-size-12">
                        Pltnm
                    </span>
                    <span className="text-dark-disabled text-size-11 w-45">
                        Pltnm Primate
                    </span>
                    <div className="flex justify-center items-center w-full space-x-[1%]">
                        <div className={`
                            rounded-lg h-[3] w-[50%] bg-green-middle3
                        `}></div>
                        <div className={`
                            rounded-lg h-[3] w-[100%] bg-red-middle
                        `}></div>
                    </div>
                </div>
                <div className="flex justify-start items-center space-x-1">
                    <span className="text-dark-disabled-opacity-6 text-size-10">
                        2 sec ago / 8YTBdk738..H374Ca
                    </span>
                    <Image src={copyImg} alt="copy" />
                </div>
                <div className="flex justify-start items-start space-x-6">
                    <div className="flex gap-2 my-1">
                        <div className="flex text-size-12">
                            <span className="text-dark-disabled mr-1">
                                VOL:
                            </span>
                            <span className="text-green-middle3">
                                21K
                            </span>
                        </div>
                        <div className="flex text-size-12 ">
                            <span className="text-dark-disabled mr-1">
                                MC:
                            </span>
                            <span>
                                231K
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-around w-full mt-0.5">
                        <div className="relative size-10">
                            <svg className="size-full rotate-188" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-neutral-700" strokeWidth="2" strokeDasharray="45 100" strokeLinecap="round"></circle>

                                {/* uncompleted */}
                                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-pink-middle3 shadow-[0px_0px_2px_rgb(152, 176, 255)]" strokeWidth="2" strokeDasharray="10 100" strokeLinecap="round"></circle>
                            </svg>
                            <div className="absolute top-0 start-1/2 transform -translate-x-1/2 text-center">
                                <span className="font-manrope-bold text-size-11 text-pink-middle3 text-shadow-[0px_0px_2px_rgb(152_176_255_)]">55</span>
                            </div>
                        </div>
                        <div className="relative size-10">
                            <svg className="size-full rotate-188" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-neutral-700" strokeWidth="2" strokeDasharray="45 100" strokeLinecap="round"></circle>

                                {/* uncompleted */}
                                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-red-pink shadow-[0px_0px_2px_rgb(152, 176, 255)]" strokeWidth="2" strokeDasharray="10 100" strokeLinecap="round"></circle>
                            </svg>
                            <div className="absolute top-0 start-1/2 transform -translate-x-1/2 text-center">
                                <span className="font-manrope-bold text-size-11 text-red-pink text-shadow-[0px_0px_2px_rgb(152_176_255_)]">4</span>
                            </div>
                        </div>
                        <div className="relative size-10">
                            <svg className="size-full rotate-188" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-neutral-700" strokeWidth="2" strokeDasharray="45 100" strokeLinecap="round"></circle>

                                {/* uncompleted */}
                                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-yellow-middle2 shadow-[0px_0px_2px_rgb(152, 176, 255)]" strokeWidth="2" strokeDasharray="10 100" strokeLinecap="round"></circle>
                            </svg>
                            <div className="absolute top-0 start-1/2 transform -translate-x-1/2 text-center">
                                <span className="font-manrope-bold text-size-11 text-yellow-middle2 text-shadow-[0px_0px_2px_rgb(152_176_255_)]">14</span>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <div className="absolute bottom-2.5 border-t border-1 w-full border-dark-gray"></div>
        </div>
        
        <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-1">
                <Image src={groupImg} alt="group" />
                <span className="text-size-10 text-pink-middle4">42%</span>
            </div>
            <div className="flex justify-center items-center gap-1">
                <Image src={supabaseImg} alt="supabase" />
                <span className="text-size-10 text-cyan-white">52%</span>
            </div>
            <div className="flex justify-center items-center gap-1">
                <Image src={docImg} alt="document" />
                <span className="text-size-10 text-green-middle4">10%</span>
            </div>
            <div className="flex justify-center items-center gap-1">
                <Image src={aiImg} alt="ai" />
                <span className="text-size-10 text-red-pink">10%</span>
            </div>
            <div className="flex justify-center items-center gap-1">
                <Image src={targetImg} alt="target" />
                <span className="text-size-10 text-red-middle">10%</span>
            </div>
            <div className="flex justify-center items-center gap-1">
                <Image src={repoImg} alt="repo" />
                <span className="text-size-10 text-yellow-middle2">10%</span>
            </div>
        </div>
      </div>
    );
};
  
export default Item;