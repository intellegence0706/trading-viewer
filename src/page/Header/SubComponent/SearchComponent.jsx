import Image from "next/image";

import searchImg from "@/assets/icons/search-alt_svgrepo.com.svg";

const SearchBarComponent = () => {
    return (
        <div className="flex justify-center mmd:justify-between items-center border-1 bg-gradient-black-gray hover:bg-gray-800 transition border-dark-gray rounded-sm p-0.5 bg-dark-1000 h-6 mmd:w-36 cursor-pointer">
            <div className="flex justify-center items-center gap-1 mmd:px-0.5">
                <Image src={searchImg} alt="search" className="min-w-4" />
                <span className="max-mmd:hidden text-dark-disabled font-manrope-bold text-size-12">Search</span>
            </div>
            <div className="max-mmd:hidden flex justify-center items-center border-1 rounded-sm border-dark-gray">
                <span className="text-dark-disabled font-manrope-bold text-size-12 px-1.5">/</span>
            </div>
        </div>
    );
  };
  
  export default SearchBarComponent;