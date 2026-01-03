import { useState } from "react";
import AnalyticstButton from "../../../../components/AnalyticsButton";

const AnalyticsComponent = () => {
    // Track which tab is open (default: none)
    const [openedTab, setOpenedTab] = useState(null);

    const handleClick = (tabName) => {
        // Close if clicking the same tab again, otherwise open the new one
        setOpenedTab(openedTab === tabName ? null : tabName);
    };

    return (
        <div className="rounded-lg border-dark-gray border-1">
            <div className={`${openedTab && 'border-b border-dark-gray'}`}>
                <ul className="flex -mb-px text-center justify-around">
                    <li 
                        className="w-[25%]" 
                        onClick={() => handleClick("5M")}
                        aria-expanded={openedTab === "5M"}
                    >
                        <AnalyticstButton 
                            isBuy={true} 
                            isOpened={openedTab === "5M"} 
                            roundSet="focus:rounded-tl-lg" 
                            text1="5M" 
                            text2="8%" 
                        />
                    </li>
                    <div className="border-l-1 border-dark-gray"></div>
                    <li 
                        className="w-[25%]"
                        onClick={() => handleClick("1H")}
                        aria-expanded={openedTab === "1H"}
                    >
                        <AnalyticstButton 
                            text1="1H" 
                            text2="-9%" 
                            isOpened={openedTab === "1H"} 
                        />
                    </li>
                    <div className="border-l-1 border-dark-gray"></div>
                    <li 
                        className="w-[25%]"
                        onClick={() => handleClick("6H")}
                        aria-expanded={openedTab === "6H"}
                    >
                        <AnalyticstButton 
                            text1="6H" 
                            text2="-31%" 
                            isOpened={openedTab === "6H"} 
                        />
                    </li>
                    <div className="border-l-1 border-dark-gray"></div>
                    <li 
                        className="w-[25%]"
                        onClick={() => handleClick("24H")}
                        aria-expanded={openedTab === "24H"}
                    >
                        <AnalyticstButton 
                            text1="24H" 
                            text2="-31%" 
                            isOpened={openedTab === "24H"} 
                            roundSet="focus:rounded-tr-lg" 
                        />
                    </li>
                </ul>
            </div>
            
            {/* Show content only if any tab is open */}
            <div 
                className={`flex justify-center space-x-4 overflow-hidden transition-all duration-200
                    ${openedTab ? 'max-h-screen p-4' : 'max-h-0'}`}
                id="accordion-content"
            >
                {/* Your content here (same as before) */}
                {openedTab && (
                    <>
                        <div className="border-1 border-dark-gray bg-gradient-black-gray rounded-lg w-[20%] flex flex-col p-2 justify-between gap-2">
                            <div className="flex flex-col">
                                <span className="font-manrope-medium text-size-9 text-dark-gray3">Txns</span>
                                <span className="font-manrope-medium text-size-9 text-white">19K</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-manrope-medium text-size-9 text-dark-gray3">Volume</span>
                                <span className="font-manrope-medium text-size-9 text-white">$678.18K</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-manrope-medium text-size-9 text-dark-gray3">Makers</span>
                                <span className="font-manrope-medium text-size-9 text-white">2.07K</span>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center w-[80%] gap-3">
                            <div className="flex flex-col">
                                <div className="flex justify-between">
                                    <span className="text-dark-gray3 text-size-9">Buys</span>
                                    <span className="text-dark-gray3 text-size-9">Sells</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white text-size-9">1004</span>
                                    <span className="text-white text-size-9">10094</span>
                                </div>
                                <div className="flex justify-center items-center w-full space-x-[1%] mt-2">
                                    <div className={`
                                        rounded-lg h-[3] w-[50%] bg-green-middle3
                                    `}></div>
                                    <div className={`
                                        rounded-lg h-[3] w-[100%] bg-red-middle
                                    `}></div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex justify-between">
                                    <span className="text-dark-gray3 text-size-9">Buy Vol.</span>
                                    <span className="text-dark-gray3 text-size-9">Sell Vol.</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white text-size-9">$445.8k</span>
                                    <span className="text-white text-size-9">$145.8k</span>
                                </div>
                                <div className="flex justify-center items-center w-full space-x-[1%] mt-2">
                                    <div className={`
                                        rounded-lg h-[3] w-[100%] bg-green-middle3
                                    `}></div>
                                    <div className={`
                                        rounded-lg h-[3] w-[40%] bg-red-middle
                                    `}></div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex justify-between">
                                    <span className="text-dark-gray3 text-size-9">Buyers</span>
                                    <span className="text-dark-gray3 text-size-9">Sellers</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white text-size-9">1004</span>
                                    <span className="text-white text-size-9">10094</span>
                                </div>
                                <div className="flex justify-center items-center w-full space-x-[1%] mt-2">
                                    <div className={`
                                        rounded-lg h-[3] w-[50%] bg-green-middle3
                                    `}></div>
                                    <div className={`
                                        rounded-lg h-[3] w-[100%] bg-red-middle
                                    `}></div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AnalyticsComponent;