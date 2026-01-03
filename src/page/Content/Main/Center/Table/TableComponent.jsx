import HorizontalButton from "@/components/HorizontalButton";
import Button from "@/components/Button";
import Table from "./Table";
import FullHeightScrollable from "@/components/FullHeightScrolable";

import Img1 from "@/assets/icons/Group 427320986.svg"
import Img2 from "@/assets/icons/Group 427320987.svg"
import Img3 from "@/assets/icons/Group 427320988.svg"
import filterImg from "@/assets/icons/filter.svg"
import TableButton from "@/components/TableButton";

const TableComponent = () => {
    return (
        <div className="rounded-md bg-black-gray text-size-12 font-manrope-bold text-dark-disabled">
            <div className="border-b-1 border-dark-gray w-full flex flex-wrap md:justify-between md:items-center">
                <ul className="flex flex-wrap justify-between xl:justify-around -mb-0.5 text-center mx-1 mt-1.5">
                    <li>
                        <HorizontalButton content="Trades"/>
                    </li>
                    <li>
                        <HorizontalButton content="Orders"/>
                    </li>
                    <li>
                        <HorizontalButton content="Positions"/>
                    </li>
                    <li>
                        <HorizontalButton content="History"/>
                    </li>
                    <li className="min-w-25">
                        <HorizontalButton content="Holders (502)"/>
                    </li>
                    <li className="min-w-23">
                        <HorizontalButton content="Top Traders"/>
                    </li>
                    <li className="min-w-22">
                        <HorizontalButton content="Dev tokens"/>
                    </li>
                </ul>
                <div className="flex mx-4 py-2 xl:justify-between xl:items-center xl:mr-4 gap-2">
                    <Button icon={Img2} />
                    <Button icon={Img3} />
                    <Button icon={filterImg} />
                    <Button icon={Img1} content='Instant Trade' fontSize="text-size-9" textColor="pink" border="border-pink-middle rounded-sm" paddingCustom="px-0.5" custom="min-w-22"/>
                </div>
            </div>
            
            <div className="border-b-1 border-dark-gray w-full">
                <div className="flex justify-end items-center px-3 py-2">
                    <div className="border-1 border-dark-gray bg-gradient-black-gray rounded-sm flex flex-wrap justify-between items-center text-size-10 text-dark-disabled">
                        <TableButton content="All" />
                        <TableButton content="Smart" />
                        <div className="min-w-19">
                            <TableButton content="Bot Users" />
                        </div>
                        <TableButton content="Dev" />
                        <TableButton content="Sniper" />
                        <TableButton content="Following" />
                    </div>
                </div>
            </div>

            <FullHeightScrollable offset={400}>
                <Table />
            </FullHeightScrollable>
        </div>
    );
  };
  
  export default TableComponent;