import Image from "next/image";
import HorizontalButton from "@/components/HorizontalButton";
import AmountButton from "@/components/AmountButton";
import Button from "@/components/Button";

import walletImg from "@/assets/icons/wallet_svgrepo.com.svg";
import eWalletImg from "@/assets/icons/solana_color.svg";
import lineImg from "@/assets/icons/Line 122.png";
import settingImg from "@/assets/icons/setting.svg";
import gasImg from "@/assets/icons/gas.svg";
import moneyImg from "@/assets/icons/money.svg";
import runImg from "@/assets/icons/run.svg";
import vectorExclamationImg from "@/assets/icons/exclamation.svg";
import aiImg from "@/assets/icons/ai.svg";
import nextArrowImg from "@/assets/icons/nextarrow.svg";
import buyImg from "@/assets/icons/buy.svg";




const BuySellComponent = () => {
    return (
        <div className="rounded-md border-dark-gray border-1">
            <div className="border-b-1 border-dark-gray p-3">
                <div className="flex justify-around items-center bg-gradient-black-gray rounded-md border-dark-gray border-1">
                    <button className="w-full -my-px rounded-md text-size-12 font-manrope-extra-bold py-2  text-dark-disabled hover:text-gray-300 focus:bg-green-opacity-005 focus:border-green-middle4 focus:text-white focus:border-1 transition">Buy</button>
                    <button className="w-full -my-px rounded-md text-size-12 font-manrope-extra-bold py-2 text-dark-disabled hover:text-gray-300 focus:border-red-middle focus:bg-red-opacity-005 focus:text-white focus:border-1 transition">Sell</button>
                </div>
            </div>

            <div className="border-b-1 border-dark-gray flex justify-between items-center">
                <ul className="flex -mb-0.5 text-center justify-around mx-1">
                    <li>
                        <HorizontalButton content="Market"/>
                    </li>
                    <li>
                        <HorizontalButton content="Limit"/>
                    </li>
                    <li>
                        <HorizontalButton content="Advanced"/>
                    </li>
                </ul>

                {/* Wallet */}
                <div className="min-w-15 flex justify-between border-1 rounded-2xl border-dark-gray px-2 bg-gradient-black-gray mx-3">
                    <div className="flex justify-center items-center mr-1">
                        <Image src={walletImg} alt="wallet" className="mx-0.5" />
                        <span className="mr-1 text-size-9 pt-0.5 text-half-enabled">1</span>
                    </div>
                    <Image src={lineImg} alt="line" className="py-0.5" />
                    <div className="flex justify-center items-center mr-1">
                        <Image src={eWalletImg} alt="solana" className="mx-1" />
                        <span className="font-manrope-bold text-size-9 pt-0.5 text-half-enabled">0</span>
                    </div>
                </div>
            </div>

            <div className="p-3 flex flex-col gap-2 text-size-11 text-dark-disabled">
                <div className="border-1 border-dark-gray rounded-md flex">
                    <div className="border-r-1 border-dark-gray w-[30%] py-2 flex justify-center items-center rounded-l-md bg-dark-gray4">Amount</div>
                    <div className="bg-gradient-black-gray w-[70%] rounded-r-md px-3 flex justify-between items-center">
                        <span>0</span>
                        <Image src={eWalletImg} alt="solana" />
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <AmountButton content="0.01" width="w-[21%]" />
                    <AmountButton content="0.02" width="w-[21%]" />
                    <AmountButton content="0.5" width="w-[21%]" />
                    <AmountButton content="1" width="w-[21%]" />
                    <AmountButton icon={settingImg} />
                </div>

                <div className="flex justify-between items-center mt-1">
                    {/* Run */}
                    <div className=" flex justify-center items-center">
                        <Image src={runImg} alt="run" />
                        <span className="text-size-10 text-dark-disabled px-1">
                            20%
                        </span>
                    </div>

                    {/* Gas */}
                    <div className="flex justify-center items-center">
                        <Image src={gasImg} alt="gas" />
                        <span className="text-size-10 text-dark-disabled px-1">
                            0.0015
                        </span>
                    </div>

                    {/* Money */}
                    <div className="flex justify-center items-center">
                        <Image src={moneyImg} alt="money" />
                        <span className="text-size-10 text-yellow-middle2 px-1 pt-0.5">
                            0.0015
                        </span>
                        <Image src={vectorExclamationImg} alt="exclamation" />
                    </div>

                    {/* Line */}
                    <Image src={lineImg} alt="line" className="px-1 w-fit"/>

                    {/* AI */}
                    <div className="flex justify-center items-center">
                        <Image src={aiImg} alt="ai" />
                        <Image src={nextArrowImg} alt="next arrow" />
                    </div>

                    {/* Buy Button */}
                    {/* <Button icon={buyImg} content="Auto Buy" fontSize="text-size-8" border="rounded-2xl border-pink-middle" textColor="pink" /> */}
                    <div className="rounded-2xl border-1 border-pink-middle text-size-8 text-pink-middle flex justify-center items-center px-2 py-0.5 hover:bg-gray-700">
                        <Image src={buyImg} alt="buy" />
                        <span>Auto Buy</span>
                    </div>
                </div>

                <Button content="Buy Pltnm" backgroundColor="bg-linear-to-r  from-green-from to-green-to" border="border-green-border rounded-md" textColor="text-white" custom="py-1.5 text-white hover:brightness-105"/>
            </div>
        </div>
    );
  };
  
  export default BuySellComponent;