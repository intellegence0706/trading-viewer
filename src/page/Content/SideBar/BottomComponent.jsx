import Image from "next/image";

import SideBarButton from "../../../components/SideBarButton";

import lineImg from "@/assets/icons/vertical line.png";

import { SideBarButtons } from "./Data";

const BottomComponent = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
        <Image src={lineImg} alt="line" className="w-fit" />
        {SideBarButtons.bottomButtons.map((button, index) => {
          return <SideBarButton key={index} icon={button.icon} content={button.content} />
        })}
    </div>
  );
};

export default BottomComponent;