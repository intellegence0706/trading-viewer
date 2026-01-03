'use client';
import Image from "next/image";
import SideBarButton from "../../../components/SideBarButton";

import logoImg from "@/assets/icons/logo.svg";
import searchImg from "@/assets/icons/search.svg";
import lineImg from "@/assets/icons/vertical line.png";

import { SideBarButtons } from "./Data";
import { useState } from "react";

const TopComponent = () => {
  const [activeId, setActiveId] = useState(0);

  const handleButtonClick = (id) => {
    setActiveId(id);
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
        <Image src={logoImg} alt="logo"/>
        <Image src={lineImg} alt="line" className="w-fit" />
        <div className="border-none rounded-lg bg-[rgba(39,48,72,0.44)] hover:bg-gray-700 transition w-10 h-10 flex justify-center items-center">
          <Image src={searchImg} alt="search" />
        </div>

        {SideBarButtons.topButtons.map(button => {
          return <SideBarButton 
              handleClick={() => handleButtonClick(button.id)} 
              key={button.id} 
              icon={button.icon} 
              content={button.content} 
              btnEnabled={activeId === button.id}
            />
        })}
    </div>
  );
};

export default TopComponent;