import React from "react";
import "./sidebar.css";
import navigationItems from "./navigationItems.json";

const Sidebar = () => {
  return (
    <div className="w-[470px] h-screen ml-3">
      <div className="text-black text-2xl font-bold ml-4 mt-7">Menu</div>
      <div className="w-44 h-64 flex-col  ml-14  mt-6">
        <div className="flex items-center  text-center ">
          <img src="images/home1.png" alt="" className="w-8 h-8" />
          <a
            href="/"
            className="ml-7 mt-2 text-center text-black text-2xl font-normal font-['Roboto']"
          >
            Home
          </a>
        </div>
        {navigationItems.map((item) => (
          <div key={item.id} className="flex items-center text-center mt-3">
            <img src={item.iconSrc} alt="" className="w-7 h-7 mt-3" />
            <a
              href="/"
              className="ml-8 mt-3 text-center text-zinc-500 text-xl font-medium font-['Roboto']"
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>
      <div className=" px-4 py-2.5 gap-2.5 inline-flex">
        <div className="ml-20 mt-20">
          <a href="/">
            <button className="w-24 h-10 bg-sky-600 rounded justify-start items-start   text-white text-base text-center font-medium font-['Roboto']">
              Add post
            </button>
          </a>
        </div>
      </div>
      <div className="ml-5 w-[49px] h-[29px]">
        <p className="text-black text-xl font-bold">ADS</p>
      </div>
      <div className="ml-7 mt-4">
        <img
          src="images/ads.jpg"
          alt=""
          className="w-[260px] h-[160px] rounded-xl"
        ></img>
      </div>
      <div className="flex ml-4 mt-8">
        <div>
          <img src="images/Emoji.p.png" alt="" className="w-9 h-9 mt-3"></img>
        </div>
        <div className="mt-1 ml-3 ">
          <p className="w-56 h-10 text-xl">How to improve business in social media</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
