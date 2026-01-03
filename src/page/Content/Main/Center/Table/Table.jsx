import Image from "next/image";

import ascImg from "@/assets/icons/ascdsc.svg";
import arrowLeftRightImg from "@/assets/icons/ArrowsLeftRight.svg";
import dollarImg from "@/assets/icons/dollar-minimalistic_svgrepo.com.svg";
import filterImg from "@/assets/icons/filter.svg";
import TableRowComponent from "./TableRowComponent";


const Table = () => {
    return (
        <div className="flex flex-col">
            <div className=" overflow-auto">
                <div className=" min-w-full inline-block align-middle">
                    <div className="overflow-auto">
                        <table className="min-w-full divide-y-2 divide-dark-gray text-size-12 font-manrope-bold text-dark-disabled w-full text-left">
                            <thead className="bg-dark-gray5">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex items-center gap-1">
                                            <span>Age</span>
                                            <Image src={ascImg} alt="ascending" className="min-w-5" />
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Type
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex items-center gap-1">
                                            <span>Price</span>
                                            <div className="rounded-3xl bg-dark-gray p-1">
                                                <Image src={arrowLeftRightImg} alt="ascending" />
                                            </div>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Amt
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex items-center gap-1">
                                            <Image src={filterImg} alt="filter" />
                                            <span>Total</span>
                                            <div className="rounded-3xl bg-dark-gray p-1">
                                                <Image src={dollarImg} alt="dollar" />
                                            </div>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex justify-end items-center gap-1">
                                            <span>Maker</span>
                                            <Image src={filterImg} alt="ascending" />
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-dark-gray ">
                                <TableRowComponent isBuy={true} progress="15"/>
                                <TableRowComponent isBuy={true} progress="8" isHyped={true} />
                                <TableRowComponent isBuy={true} progress="10" />
                                <TableRowComponent isBuy={true} progress="20"/>
                                <TableRowComponent progress="15"/>
                                <TableRowComponent progress="12"/>
                                <TableRowComponent progress="5"/>
                                <TableRowComponent isBuy={true} progress="20"/>
                                <TableRowComponent progress="12"/>
                                <TableRowComponent progress="12"/>
                                <TableRowComponent progress="12"/>
                                <TableRowComponent isBuy={true} progress="20"/>
                                <TableRowComponent isBuy={true} progress="20"/>
                                <TableRowComponent isBuy={true} progress="20"/>
                                <TableRowComponent isBuy={true} progress="20"/>
                                <TableRowComponent progress="12"/>
                                <TableRowComponent progress="12"/>
                                <TableRowComponent isBuy={true} progress="8" isHyped={true} />
                                <TableRowComponent isBuy={true} progress="8" isHyped={true} />
                                <TableRowComponent isBuy={true} progress="8" isHyped={true} />
                                <TableRowComponent progress="12"/>
                                <TableRowComponent progress="12"/>
                                <TableRowComponent progress="12"/>
                                <TableRowComponent isBuy={true} progress="8" isHyped={true} />
                                <TableRowComponent isBuy={true} progress="8" isHyped={true} />
                                <TableRowComponent isBuy={true} progress="8" isHyped={true} />
                                <TableRowComponent progress="12"/>
                                <TableRowComponent isBuy={true} progress="20"/>
                                <TableRowComponent isBuy={true} progress="20"/>
                                <TableRowComponent isBuy={true} progress="20"/>
                                <TableRowComponent progress="15"/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Table;