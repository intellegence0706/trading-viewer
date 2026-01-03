import Image from "next/image";

import gasImg from "@/assets/icons/gas.svg";
import moneyImg from "@/assets/icons/money.svg";
import flagImg from "@/assets/icons/flag.svg";
import lineImg from "@/assets/icons/line_black.png";
import xImg from "@/assets/icons/X.svg";
import discordImg from "@/assets/icons/Discord.svg";
import paintImg from "@/assets/icons/Paint.svg";
import volumeImg from "@/assets/icons/volume.svg";
import notificationImg from "@/assets/icons/alert_large.svg";
import documentImg from "@/assets/icons/Document.svg";
import Button from "../../components/Button";

const RightComponent = () => {
    return (
      <div className="flex justify-between items-center">
        <div className="hidden xl:flex xl:justify-around xl:items-center">
            {/* Gas */}
            <div className="min-w-20 flex justify-center">
                <Image src={gasImg} alt="gas" />
                <span className="font-manrope-bold text-size-12 text-dark-disabled px-1">
                    0.0015
                </span>
            </div>

            {/* Money */}
            <div className="min-w-20 flex justify-center">
                <Image src={moneyImg} alt="money" />
                <span className="font-manrope-bold text-size-12 text-dark-disabled px-1">
                    0.0015
                </span>
            </div>

            {/* Line */}
            <Image src={lineImg} alt="line" className="px-1 w-fit"/>
        </div>

        {/* Connect state: _on_ / off */}
        <div className="flex justify-center items-center rounded-2xl bg-green-opacity-1 p-1 max-mmd:hidden">
            <div className="rounded-xl bg-green-middle2 min-w-2 min-h-2"></div>
            <span className="font-manrope-bold text-size-12 text-green-middle2 px-1">
                Connected
            </span>
        </div>

        {/* Line */}
        <Image src={lineImg} alt="line" className="px-1 w-fit max-mmd:hidden" />

        {/* Flag */}
        <div className="min-w-15 flex justify-center">
            <Image src={flagImg} alt="flag" />
            <span className="font-manrope-bold text-size-12 text-dark-disabled px-1">
                EN
            </span>
        </div>

        {/* Line */}
        <Image src={lineImg} alt="line" className="px-1 w-fit" />

        {/* X Button */}
        <Button icon={xImg} border="border-none rounded-sm" backgroundColor="none" />
        {/* Discord Button */}
        <Button icon={discordImg} border="border-none rounded-sm" backgroundColor="none" />
        {/* Paint Button */}
        <Button icon={paintImg} border="border-none rounded-sm" backgroundColor="none" />
        {/* Volume Button */}
        <Button icon={volumeImg} border="border-none rounded-sm" backgroundColor="none" />
        {/* Notification Button */}
        <Button icon={notificationImg} border="border-none rounded-sm" backgroundColor="none" />
        {/* Document Button */}
        <Button icon={documentImg} border="border-none rounded-sm" backgroundColor="none" />        
      </div>
    );
  };
  
  export default RightComponent;