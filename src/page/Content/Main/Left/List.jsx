import Image from "next/image";
import Item from "./Item";

import itemImg from "@/assets/icons/item.svg";
import downMenuImg from "@/assets/icons/downmenu.svg";
import FullHeightScrollable from "@/components/FullHeightScrolable";

const List = () => {
    return (
      <div className="border-1 rounded-lg border-dark-gray">
        <div className="flex items-center justify-between rounded-t-lg bg-dark-gray-opacity-4 border-b border-pink-middle px-4 py-1.5">
            <div>
              <span className="text-pink-middle font-manrope-bold text-size-12 mr-1">
                  AI Trending Analysis
              </span>
              <span className="text-red-middle font-manrope-bold text-size-12">
                  (Beta)
              </span>
            </div>
            <Image src={downMenuImg} alt="downmenu" className="rounded-sm bg-dark-gray2 hover:bg-gray-800 transition" />
        </div>
        <FullHeightScrollable offset={230}>
          <div className="flex flex-col gap-3 p-2">
              <Item icon={itemImg} border="border-pink-middle2" successScore={40} />
              <Item icon={itemImg} border="border-red-middle2" successScore={40} />
              <Item icon={itemImg} border="border-yellow-middle3" successScore={40} />
              <Item icon={itemImg} border="border-pink-middle2" successScore={40} />
              <Item icon={itemImg} border="border-red-middle2" successScore={40} />
              <Item icon={itemImg} border="border-yellow-middle3" successScore={40} />
              <Item icon={itemImg} border="border-pink-middle2" successScore={40} />
              <Item icon={itemImg} border="border-red-middle2" successScore={40} />
              <Item icon={itemImg} border="border-yellow-middle3" successScore={40} />
          </div>    
        </FullHeightScrollable>
      </div>
    );
  };
  
  export default List;