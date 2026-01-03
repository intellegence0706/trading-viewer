import LockButton from "./SubComponent/LockButton";
import SubBar from "./SubBar/SubBar";

const Header = () => {
  return (
    <div className="fixed top-0 right-0 left-0 bg-black-gray z-999">
      <header className="sticky flex flex-row items-center z-50">
          <div className="basis-1/24">
            <LockButton />
          </div>
          <div className="basis-23/24">
            <SubBar />
          </div>
      </header>

      <div className="border-1 border-r-0 border-l-0 border-b-0 border-dark-gray min-w-full "></div>
    </div>
  );
};

export default Header;