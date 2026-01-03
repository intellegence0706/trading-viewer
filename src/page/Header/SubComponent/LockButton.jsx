import Image from "next/image";
import lockImg from "@/assets/icons/lock_svgrepo.com.svg";
import doubleArrowImg from "@/assets/icons/double-arrow-right_svgrepo.com.svg";

const LockButton = () => {
    return (
      <span className="bg-gray-common font-bold py-3 px-6 flex items-end gap-1 transition hover:bg-gray-700 min-w-17 max-w-17 cursor-pointer">
        <Image src={lockImg} alt="lock" width={25} />
        <Image src={doubleArrowImg} alt="arrow" width={25} />
      </span>
    );
};
  
export default LockButton;