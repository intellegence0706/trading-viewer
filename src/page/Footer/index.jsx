import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

const Footer = () => {
  return (
    <div>
      <div className="z-30 border-2 border-r-0 border-l-0 border-b-0 border-dark-gray min-w-full fixed bottom-10 right-0 left-0"></div>        
      <div className="z-20 fixed bottom-0 right-0 left-0 h-10 bg-gray-common p-2">
          <div className="flex flex-row items-center">
              <div className="basis-6/12">
                  <LeftComponent />
              </div>
              <div className="basis-4/12 ml-auto">
                  <RightComponent />
              </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;