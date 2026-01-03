import AnalyticsComponent from "./AnalyticsComponent";
import BuySellComponent from "./BuySellComponent";
import FilterComponent from "./FilterComponent";
import SimilarTokenComponent from "./SimilarTokenComponent";
import StatisticComponent from "./StatisticComponent";
import TokenInfoComponent from "./TokenInfoComponent";

const RightComponent = () => {
    return (
      // <FullHeightScrollable offset={120} disableOnMobile={true}>
        <div className="flex flex-col gap-2 min-w-85 text-white">
            <AnalyticsComponent />
            <BuySellComponent />
            <StatisticComponent />
            <TokenInfoComponent />
            <FilterComponent />
            <SimilarTokenComponent />
        </div>
      // </FullHeightScrollable>
    );
  };
  
  export default RightComponent;