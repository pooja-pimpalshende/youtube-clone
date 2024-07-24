import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 shadow-lg">
      <div className="col-span-1 flex">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 mt-2 cursor-pointer"
          alt="menu"
          src="/hamburger-menu-icon.png"
        />
        <img
          className="h-6 ml-3 my-2"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png?20230929095411"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 bg-slate-100 p-2 w-20 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user" src="/user.png" />
      </div>
    </div>
  );
};

export default Head;
