import Main from "./Main";
import SideBar from "./SideBar";

const Content = () => {
  return (
    <div className="flex pt-10">
        <SideBar />
        <Main />
    </div>
  );
};

export default Content;