import { useState } from "react";
import close from "./assets/close.svg";
import menu from "./assets/menu.svg";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky z-50 top-0 flex bg-white">
      <>
        <div className="w-full h-20 md:flex hidden flex-row justify-between items-center text-black px-8 py-2 font-sans">
          <img
            src={
              "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/zfknckgkzlafeqpgwy02"
            }
            alt="logo"
            className=""
          />
          <div className="h-full flex flex-row items-center text-orange-500 text-[1.3rem] gap-8 mr-8 font-normal">
            <a href="/">
              Home
            </a>
            <a href="/">
              Blogs
            </a>
            <a href="/">
              Discover Broker
            </a>
          </div>
        </div>
        <div className="w-full h-20 md:hidden flex flex-row justify-between items-center text-black px-8 py-2 font-sans">
          <img
            src={
              "https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/zfknckgkzlafeqpgwy02"
            }
            alt="logo"
            className=""
          />
          <button
            onClick={() => setOpen(!open)}
            className="text-orange-500 text-[1.3rem] font-normal"
          >
            <img src={open ? close : menu} alt="" className="w-8 h-8" />
          </button>
        </div>
        <div
          className={`fixed z-50 top-0 left-0 w-screen bg-white flex-col justify-center items-center ${
            open
              ? "flex"
              : "hidden"
          } mt-20`}
        >
          <div className="h-full flex flex-col items-center text-orange-500 text-[1.3rem] gap-4 font-normal">
            <a href="/" >
              Home
            </a>
            <a href="/" >
              Blogs
            </a>
            <a href="/" >
              Discover Broker
            </a>
          </div>
        </div>
      </>
    </div>
  );
};

export default Nav;
