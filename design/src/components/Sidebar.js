import React from "react";
import "./sidebar.css";
import navigationItems from "./navigationItems.json";

const Sidebar = () => {
  return (
    <div className="w-[400px] h-screen ml-3">
      <div className="text-black text-base font-bold ml-4 mt-7">Menu</div>
      <div className="w-44 h-64 flex-col  ml-14  mt-2">
        <div className="flex items-center  text-center ">
          <img src="images/home1.png" alt="" className="w-7 h-7" />
          <a
            href="/"
            className="ml-7 mt-2 text-center text-black text-lg font-normal font-['Roboto']"
          >
            Home
          </a>
        </div>
        {navigationItems.map((item) => (
          <div key={item.id} className="flex items-center text-center mt-3">
            <img src={item.iconSrc} alt="" className="w-6 h-6" />
            <a
              href="/"
              className="ml-8 mt-1 text-center text-zinc-500 text-base font-medium font-['Roboto']"
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>
      <div className=" px-5 py-2.5 gap-2.5 inline-flex">
        <div className="ml-20">
          <a href="/">
            <button className="w-20 h-8 bg-sky-600 rounded justify-start items-start   text-white text-base text-center font-medium font-['Roboto']">
              Add post
            </button>
          </a>
        </div>
      </div>
      <div className="ml-5 w-[49px] h-[29px]">
        <p className="text-black text-base font-bold">ADS</p>
      </div>
      <div className="ml-8 mt-3">
        <img
          src="images/ads.jpg"
          alt=""
          className="w-[200px] h-[120px] rounded"
        ></img>
      </div>
      <div className="flex ml-4 mt-3">
        <div>
          <img src="images/Emoji.p.png" alt="" className="w-7 h-7 mt-3"></img>
        </div>
        <div className="mt-1 ml-3 ">
          <p className="w-56 h-10">How to improve business in social media</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
