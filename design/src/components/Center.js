import React, { useRef } from "react";
import "./center.css";
import items from "./items.json";

import postData from "./postData.json";

const Center = () => {
  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 500;
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 500;
    }
  };
  return (
    <div className="w-[600px] h-screen overflow-y-auto scrollbar-hide mt-5 ml-8 mr-5">
      <div className="w-[520px] h-[116px] rounded-2xl border border-slate-400 relative">
        <div className="w-10 h-16 ml-4 cursor-pointer absolute z-10 left-0">
          <button onClick={handleScrollLeft}>
            <img src="images/v-1.png" alt="" className="mt-9  cursor-pointer" />
          </button>
        </div>
        <div className="flex w-[500px] ml-3">
          <div
            className="inline-flex w-[430px] h-28 mt-1 ml-8 overflow-x-auto scrollbar-hide overflow-y-hidden relative"
            ref={scrollContainerRef}
          >
            <div className="inline-flex">
              {items.map((item) => (
                <div className="w-[85px] flex flex-col" key={item.id}>
                  <div>
                    <a href="/">
                      <img
                        src={item.imgSrc}
                        alt=""
                        className="w-16 h-16 rounded-full outline-dashed mt-2 ml-3 outline-rose-400"
                      />
                    </a>
                    <p className=" text-center mt-2 text-sm  text-black  font-normal font-['ROBOTO'] w-24">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-6 h-6">
            <button onClick={handleScrollRight}>
              <img
                src="images/v-2.png"
                alt=""
                className="cursor-pointer mt-9 ml-3"
              ></img>
            </button>
          </div>
        </div>
      </div>

      {postData.map((data) => (
        <div className="w-[530px] h-[380px]" key={data.id}>
          <div className="w-[530px] h-[280px] rounded-2xl border border-slate-400  mt-8">
            <div className="w-[530px] h-10 flex-col">
              <div className="inline-flex">
                <a href="/">
                  <img
                    src={data.imageUrl}
                    alt=""
                    className="w-12 h-12 rounded-full outline-dashed outline-red-400 mt-2 ml-4"
                  />
                </a>
                <div className="flex flex-col mt-3 ml-7 w-36 h-36">
                  <p className="text-black text-base font-bold font-['Roboto']">
                    {data.userName}
                  </p>
                  <p className="text-neutral-500 text-xs font-medium font-['Roboto']">
                    {data.userHandle}
                  </p>
                </div>
                <div className="ml-[300px] mt-4 w-5 h-5 mr-4">
                  <div className="h-10">
                    <button>
                      <img
                        src="images/dot.png"
                        alt=""
                        className="w-6 h-6 mr-20"
                      />
                      </button>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="flex ml-4 mt-6 h-5">
              <p className="text-base text-black font-normal font-['Roboto']">
                {data.description}
              </p>
              <p className="text-indigo-700 text-base font-normal font-['Roboto']">
                {data.hashtags}
              </p>
            </div>
            <div className="w-[530px] h-[270px] rounded-2xl bg-red-900 mt-2">
              <img src={data.imageSrc} alt="" className="w-[550px] h-[230px]" />
              <div className="inline-flex">
                <a href="/">
                  <img
                    src="images/heart.png"
                    alt=""
                    className="w-7 h-7 ml-6 mt-1"
                  />
                </a>
                <p className="ml-1 mt-1 text-white text-base font-normal font-['Roboto']">
                  {data.likes}
                </p>
                <a href="/">
                  <img
                    src="images/ms.png"
                    alt=""
                    className="ml-40 mt-2 w-6 h-6"
                  />
                </a>
                <p className="ml-1 mt-2 text-white text-base font-normal font-['Roboto']">
                  {data.comments}
                </p>
                <a href="/">
                  <img
                    src="images/save.png"
                    alt=""
                    className="w-5 h-5 ml-44 mt-3"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-[94px] ml-2">
            <p className="w-20 h-8 text-zinc-600 text-sm not-italic font-normal font-['Roboto'] ">
              {data.datePosted}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Center;
