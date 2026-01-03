const StatisticComponent = () => {
    return (
        <div className="rounded-md border-dark-gray border-1">
            <ul className="flex text-center justify-around text-size-10 text-dark-gray3">
                <li className="w-[25%] flex flex-col justify-center items-center py-2">
                    <span>Bought</span>
                    <span className="text-size-11 text-green-middle3">$0</span>
                </li>
                <div className="border-l-1 border-dark-gray"></div>
                <li className="w-[25%] flex flex-col justify-center items-center">
                    <span>Sold</span>
                    <span className="text-size-11 text-red-middle">$0</span>
                </li>
                <div className="border-l-1 border-dark-gray"></div>
                <li className="w-[25%] flex flex-col justify-center items-center">
                    <span>Holding</span>
                    <span className="text-size-11 text-white">$0</span>
                </li>
                <div className="border-l-1 border-dark-gray"></div>
                <li className="w-[25%] flex flex-col justify-center items-center">
                    <span>PnL</span>
                    <span className="text-size-11 text-green-middle3">+$1 (0.01%)</span>
                </li>
            </ul>
        </div>
    );
  };
  
  export default StatisticComponent;