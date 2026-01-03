import Image from "next/image";
import Dropdown from "@/components/Dropdown";
import InputComponent from "@/components/InputComponent";

import walletImg from "@/assets/icons/wallet_svgrepo.com.svg";
import eWalletImg from "@/assets/icons/solana_color.svg";
import plainImg from "@/assets/icons/plain.svg";
import copyImg from "@/assets/icons/copy.svg";
import solanaImg from "@/assets/icons/solana_color.svg";
import rect1Img from "@/assets/icons/rectangle/Rectangle 4497.svg";
import rect2Img from "@/assets/icons/rectangle/Rectangle 4498.svg";
import rect3Img from "@/assets/icons/rectangle/Rectangle 4499.svg";

const WalletComponent = () => {
  return (
    <Dropdown buttonContent={
        <div className="min-w-20 flex justify-between items-center border-1 rounded-2xl border-dark-gray px-2 bg-gradient-black-gray py-0.5 hover:bg-gray-800 transition">
          <div className="flex justify-center items-center mr-1">
              <Image src={walletImg} alt="wallet" className="mx-0.5" />
              <span className="mr-1 text-size-9 pt-0.5 text-half-enabled">1</span>
          </div>
          <div className="flex justify-center items-center mr-1">
              <Image src={eWalletImg} alt="solana" className="mx-1" />
              <span className="font-manrope-bold text-size-9 pt-0.5 text-half-enabled">0</span>
          </div>
        </div>
      } childWidth="w-80" bottom={true}>
        <li className="flex justify-between items-center text-size-10 text-dark-gray10">
          <div className="flex justify-start items-center gap-2">
            <InputComponent color="bg-red-yellow2" />
            <div className="flex flex-col justify-start gap-1">
              <span className="text-size-12 text-red-yellow2">Azal Main</span>
              <div className="flex items-center justify-start gap-3">
                <div className="flex items-center gap-1">
                    <Image src={plainImg} alt="plain" />
                    <span >Off</span>
                </div>
                <div className="flex items-center gap-1">
                    <span>E7Fo4</span>
                    <Image src={copyImg} alt="copy" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl px-3 py-1 border-1 border-dark-gray flex items-center gap-1">
                <Image src={solanaImg} alt="solana" />
                <span className="text-dark-gray3">0</span>
            </div>
            <div className="rounded-2xl px-3 py-1 border-1 border-dark-gray flex items-center gap-4">
                <div className="relative pb-0.5">
                    <Image src={rect1Img} alt="rect" width={10}/>
                    <Image src={rect2Img} alt="rect" width={10} className="absolute top-0 left-1.5" />
                    <Image src={rect3Img} alt="rect" width={10} className="absolute top-0 left-3"/>
                </div>
                <span className="text-dark-gray3">0</span>
            </div>
          </div>
        </li>
        <div className="border-b-1 border-dark-gray -mx-3"></div>

        <li className="flex justify-between items-center text-size-10 text-dark-gray10">
          <div className="flex justify-start items-center gap-2">
            <InputComponent/>
            <div className="flex flex-col justify-start gap-1">
              <span className="text-size-12 text-pink-middle">Azal Main</span>
              <div className="flex items-center justify-start gap-3">
                <div className="flex items-center gap-1">
                    <Image src={plainImg} alt="plain" />
                    <span >Off</span>
                </div>
                <div className="flex items-center gap-1">
                    <span>E7Fo4</span>
                    <Image src={copyImg} alt="copy" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl px-3 py-1 border-1 border-dark-gray flex items-center gap-1">
                <Image src={solanaImg} alt="solana" />
                <span className="text-dark-gray3">0</span>
            </div>
            <div className="rounded-2xl px-3 py-1 border-1 border-dark-gray flex items-center gap-4">
                <div className="relative pb-0.5">
                    <Image src={rect1Img} alt="rect" width={10}/>
                    <Image src={rect2Img} alt="rect" width={10} className="absolute top-0 left-1.5" />
                    <Image src={rect3Img} alt="rect" width={10} className="absolute top-0 left-3"/>
                </div>
                <span className="text-dark-gray3">0</span>
            </div>
          </div>
        </li>
        <div className="border-b-1 border-dark-gray -mx-3"></div>

        <li className="flex justify-between items-center text-size-10 text-dark-gray10">
          <div className="flex justify-start items-center gap-2">
            <InputComponent/>
            <div className="flex flex-col justify-start gap-1">
              <span className="text-size-12 text-pink-middle">Azal Main</span>
              <div className="flex items-center justify-start gap-3">
                <div className="flex items-center gap-1">
                    <Image src={plainImg} alt="plain" />
                    <span >Off</span>
                </div>
                <div className="flex items-center gap-1">
                    <span>E7Fo4</span>
                    <Image src={copyImg} alt="copy" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl px-3 py-1 border-1 border-dark-gray flex items-center gap-1">
                <Image src={solanaImg} alt="solana" />
                <span className="text-dark-gray3">0</span>
            </div>
            <div className="rounded-2xl px-3 py-1 border-1 border-dark-gray flex items-center gap-4">
                <div className="relative pb-0.5">
                    <Image src={rect1Img} alt="rect" width={10}/>
                    <Image src={rect2Img} alt="rect" width={10} className="absolute top-0 left-1.5" />
                    <Image src={rect3Img} alt="rect" width={10} className="absolute top-0 left-3"/>
                </div>
                <span className="text-dark-gray3">0</span>
            </div>
          </div>
        </li>
      </Dropdown>
  );
};

export default WalletComponent;