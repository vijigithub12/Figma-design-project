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
    <div className="w-[750px] h-screen overflow-auto scrollbar-hide mt-8 mr-5 overflow-x-hidden">
      <div className="w-[700px] h-36 rounded-3xl border border-slate-400 relative ml-10 mt-3">
        <div className="w-[10px] h-28 ml-10 cursor-pointer absolute z-10 left-0">
          <button onClick={handleScrollLeft}>
            <img
              src="images/v-1.png"
              alt=""
              className="mt-14 cursor-pointer w-5 h-5"
            />
          </button>
        </div>
        <div className="flex w-[600px] ml-14">
          <div
            className="inline-flex w-[500px] h-32 mt-3 ml-6 overflow-x-auto scrollbar-hide overflow-y-hidden relative"
            ref={scrollContainerRef}
          >
            <div className="inline-flex">
              {items.map((item) => (
                <div className="w-[100px] flex flex-col" key={item.id}>
                  <div className="">
                    <div className="ml-4">
                      <a href="/">
                        <img
                          src={item.imgSrc}
                          alt=""
                          className="w-20 h-20 rounded-full outline-dashed mt-2  outline-rose-400"
                        />
                      </a>
                    </div>
                    <p className=" text-center mt-2 text-base ml-1  text-black  font-normal font-['ROBOTO'] w-24">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-7 h-7">
            <button onClick={handleScrollRight}>
              <img
                src="images/v-2.png"
                alt=""
                className="cursor-pointer mt-14 ml-10 w-5 h-5"
              ></img>
            </button>
          </div>
        </div>
      </div>

      {postData.map((data) => (
        <div className="w-[700px] h-[460px]" key={data.id}>
          <div className="w-[700px] h-[430px] rounded-2xl border border-slate-400  mt-8 ml-10">
            <div className="w-[600px] h-20 flex-col">
              <div className="inline-flex">
                <a href="/">
                  <img
                    src={data.imageUrl}
                    alt=""
                    className="w-20 h-20 rounded-full outline-dashed outline-red-400 mt-3 ml-4"
                  />
                </a>
                <div className="flex flex-col mt-6 ml-7 w-36 h-36">
                  <p className="text-black text-xl font-bold font-['Roboto']">
                    {data.userName}
                  </p>
                  <p className="text-neutral-500 text-base font-medium font-['Roboto']">
                    {data.userHandle}
                  </p>
                </div>
                <div className="ml-[300\px] mt-5 w-5 h-5 ">
                  <div className="h-10">
                    <button>
                      <img
                        src="images/dot.png"
                        alt=""
                        className="w-7 h-7 ml-20"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex ml-4 mt-5 h-5">
              <p className="text-xl  text-black font-normal font-['Roboto']">
                {data.description}
              </p>
              <p className="text-indigo-700 text-lg font-normal font-['Roboto']">
                {data.hashtags}
              </p>
            </div>
            <div className="w-[700px] h-[300px] rounded-2xl bg-red-900 mt-4">
              <img src={data.imageSrc} alt="" className="w-[700px] h-[250px]" />
              <div className="inline-flex">
                <a href="/">
                  <img
                    src="images/heart.png"
                    alt=""
                    className="w-9 h-9 ml-8 mt-2"
                  />
                </a>
                <p className="ml-1 mt-3 text-white text-lg font-normal font-['Roboto']">
                  {data.likes}
                </p>
                <a href="/">
                  <img
                    src="images/ms.png"
                    alt=""
                    className="ml-52 mt-2 w-8 h-8"
                  />
                </a>
                <p className="ml-1 mt-3 text-white text-lg font-normal font-['Roboto']">
                  {data.comments}
                </p>
                <a href="/">
                  <img
                    src="images/save.png"
                    alt=""
                    className="w-6 h-6 ml-64 mt-3"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-3 ml-10">
            <p className="w-24 h-8 text-zinc-600 text-lg not-italic font-normal font-['Roboto'] ">
              {data.datePosted}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Center;
