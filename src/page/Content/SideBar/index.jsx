import TopComponent from "./TopComponent";
import BottomComponent from "./BottomComponent";

const SideBar = () => {
  return (
    <div className="hidden sm:flex fixed left-0 top-10 bottom-10 bg-black-gray z-10">
      <div className="w-17 max-w-17 py-5 flex flex-col justify-between">
          <TopComponent />
          <BottomComponent />
      </div>
      <div className="border-2 border-r-0 border-t-0 border-b-0 border-dark-gray min-h-full fixed left-16.5 top-0"></div>
    </div>
  );
};

export default SideBar;