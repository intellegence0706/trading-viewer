import Image from "next/image";

import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";
import NormalButton from "@/components/NormalButton";

import walletImg from "@/assets/icons/wallet_svgrepo.com.svg";
import eWalletImg from "@/assets/icons/solana_color.svg";
import unitImg from "@/assets/icons/dollars_cyan.svg";
import lineImg from "@/assets/icons/Line 122.png";
import downBtnImg from "@/assets/icons/Group 427321302.svg";
import copyImg from "@/assets/icons/copy.svg";
import solanaImg from "@/assets/icons/solana_color.svg";
import dollarsImg from "@/assets/icons/dollars_cyan.svg";
import exchangeImg from "@/assets/icons/exchange.svg";

const ExchangeComponent = () => {
    return (
        <Dropdown buttonContent={
            <div className="flex justify-between items-center border-1 rounded-2xl bg-gradient-black-gray border-dark-gray px-2 min-w-35 hover:bg-gray-800 transition">
                <Image src={walletImg} alt="wallet" className="mr-1" />
                <div className="flex justify-center items-center mr-1">
                    <Image src={eWalletImg} alt="solana" className="mx-1" />
                    <span className="mr-1 font-manrope-bold text-size-12 text-white pt-0.5">0.001</span>
                </div>
                <div className="mr-2">
                    <Image src={lineImg} alt="line" />
                </div>
                <Image src={unitImg} alt="unit" />
                <div className="flex justify-center items-center">
                    <span className="mr-1 font-manrope-bold text-size-12 text-white pt-0.5 mx-2">0</span>
                    <Image src={downBtnImg} alt="down" />
                </div>
            </div>
          } childWidth="w-50">
            <li className="flex justify-between items-center space-x-1 text-size-10 text-dark-disabled">
              <span className="text-size-11">Total Value</span>
              <div className="flex items-center gap-0.5">
                  <Image src={copyImg} alt="solana" />
                  <span className="pt-[1]">Solana</span>
              </div>
              <div className="flex items-center gap-0.5">
                  <Image src={copyImg} alt="perps" />
                  <span className="pt-[1]">Perps</span>
              </div>
            </li>
  
            <li className="flex justify-start items-center space-x-1">
              <span className="text-white text-size-13">$0.15</span>
            </li>
  
            <div className="border-b-1 border-dark-gray -mx-3"></div>
            
            <li className="flex justify-between items-center space-x-1">
              <div className="flex justify-center items-center gap-1">
                  <Image src={solanaImg} alt="solana" />
                  <span className="text-size-12 font-manrope-bold text-white pt-[1]">0.001</span>
              </div>
              <Button icon={exchangeImg} />
              <div className="flex justify-center items-center gap-1">
                  <Image src={dollarsImg} alt="USD" />
                  <span className="text-size-12 font-manrope-bold text-white pt-[1]">0</span>
              </div>
            </li>
            
            <div className="border-b-1 border-dark-gray -mx-3"></div>
  
            <div className="flex justify-between items-center">
              <NormalButton content="Deposit" border="border-pink-middle" padding="px-3 py-0.5" background="bg-pink-middle" fontColor="text-white" fontSize="text-size-10" />
              <NormalButton content="Withdraw" border="border-pink-middle" padding="px-3 py-0.5" fontColor="text-white" fontSize="text-size-10" />
            </div>
          </Dropdown>
    );
  };
  
  export default ExchangeComponent;