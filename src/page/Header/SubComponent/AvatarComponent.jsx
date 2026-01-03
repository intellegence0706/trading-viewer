import Image from "next/image";
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";
import NormalButton from "@/components/NormalButton";

import avatarImg from "@/assets/icons/avatar.svg";
import avatarDarkImg from "@/assets/icons/avatar_dark.svg";
import plusImg from "@/assets/icons/plus.svg";
import vectorImg from "@/assets/icons/Vector.svg";
import exitImg from "@/assets/icons/exit.svg";
import walletImg from "@/assets/icons/wallet_svgrepo.com.svg";
import nonAvatarImg from "@/assets/icons/non_avatar.png";
import copyImg from "@/assets/icons/copy.svg";
import linkcyanImg from "@/assets/icons/link_cyan.svg";
import linkdarkImg from "@/assets/icons/link_dark.svg";
import linkblueImg from "@/assets/icons/link_blue.svg";
import flagImg from "@/assets/icons/flag.svg";
import dropdownImg from "@/assets/icons/dropdown_white.svg";
import discordImg from "@/assets/icons/discord_white.svg";
import chainImg from "@/assets/icons/chain_white.svg";
import linkwhiteImg from "@/assets/icons/link_white.svg";

const AvatarComponent = () => {
    return (
      <div>
        <Dropdown buttonContent={
            <Button icon={avatarImg} textColor='pink' content="Jack" border="rounded-2xl border-pink-middle" other="dropdown" paddingCustom="" />
          } buttonWidth="w-20" childWidth="w-40">
            <li className="flex justify-start items-center space-x-1 
                hover:brightness-150 transition"
                onClick={() => document.getElementById('my_modal_1').showModal()}
            >
              <Image src={avatarDarkImg} alt="avatar" />
              <span className="text-dark-gray3 text-size-11">Account & Security</span>
            </li>
            <li className="flex justify-start items-center space-x-1 hover:brightness-150 transition">
              <Image src={plusImg} alt="add" />
              <span className="text-pink-middle text-size-11">Create Account</span>
            </li>
            <li className="flex justify-start items-center space-x-1 hover:brightness-150 transition">
              <Image src={exitImg} alt="exit" className="ml-0.5" />
              <span className="text-red-middle text-size-11">Log Out</span>
            </li>
          </Dropdown>

          {/* Modals */}
          <dialog id="my_modal_1" className="min-w-xs xs:w-full md:w-2xl m-auto bg-gradient-black-gray border-1 border-dark-gray rounded-md lg:rounded-lg">
            <div className=" text-dark-disabled text-size-12">
              <div className="flex justify-between items-center border-b-1 border-dark-gray px-2 py-1 lg:px-5 lg:py-2">
                <div className="flex items-center gap-2">
                  <Image src={avatarDarkImg} alt="avatar" />
                  <span className="">Account & Security</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <NormalButton latterIcon={linkblueImg} border="border-none" content="Set Referral Link" onClick={() => document.getElementById('my_refferal_modal').showModal()} />
                  <form method="dialog">
                    <button className="btn hover:brightness-125 transition"><Image src={vectorImg} alt="exit" /></button>
                  </form>
                </div>
              </div>

              {/* Rest of the modal content remains exactly the same */}
              {/* ... */}
              
            </div>
          </dialog>

          {/* Set Referral Modal */}
          <dialog id="my_refferal_modal" className="m-auto w-60 bg-gradient-black-gray border-1 border-dark-gray rounded-md lg:rounded-lg">
              <div className="px-4 py-2 flex justify-center border-b-1 border-dark-gray">
                <span className="text-size-12 text-white">Set Referral Code</span>
                <form method="dialog" className="absolute right-3 top-[4]">
                  <button className="btn hover:brightness-125 transition"><Image src={vectorImg} alt="exit" /></button>
                </form>
              </div>
              <div className="flex flex-col justify-start p-4 gap-3 border-b-1 border-dark-gray">
                <span className="text-size-12 text-dark-gray9">Referral Code</span>
                <input placeholder="Enter referral code" className="rounded-2xl border-1 border-dark-gray text-dark-gray-opacity-5 text-size-10 px-5 py-1 w-full" />
                <NormalButton content="Set" fontColor="text-white" borderRound="rounded-2xl" size="w-full" background="bg-pink-middle" hover="hover:bg-blue-300" padding="py-1.5" border="border-none"/>
              </div>
              <div className="px-4 py-2">
                <p className="text-size-9 text-dark-gray-opacity-5 text-center">
                  Set your referral code and 
                  <span className="text-[rgba(255,255,255,0.65)] mx-1">earn 30%+ from the people you refer!</span>
                  Your referral code will also be your 
                  <span className="text-[rgba(255,255,255,0.65)] mx-1">username</span>
                </p>
              </div>
          </dialog>
      </div>
    );
};
  
export default AvatarComponent;