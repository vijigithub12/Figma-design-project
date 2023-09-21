import React from "react";
import followerBlock from "./followerBlock.json";
import followersBlock from "./followersBlock.json";

const Rightbar = () => {
  return (
    <div className="w-96 h-screen ml-5 mr-16 mt-10">
      <div className="w-[390px] h-[560px] border border-slate-400 rounded-2xl ">
        <div className="mt-5 ml-10">
          <p className="text-black text-lg font-medium font-['Roboto']">
            Recent Followers
          </p>
        </div>
        <div className=" mt-4 flex flex-col ml-7">
          {followerBlock.map((follower) => (
            <div key={follower.id} className="flex ml-6 mb-3 items-center">
              <img
                src={follower.imgSrc}
                alt={follower.name}
                className="w-11 h-11 rounded-full object-cover mt-1 "
              />
              <div className="flex flex-col text-center  ml-5 w-36 h-10">
                <div className="flex text-black text-base   font-normal  font-['Roboto']">
                  {follower.name}
                </div>
                <div className="flex mr-16 text-neutral-500 text-xs font-normal  font-['Roboto'] ">
                  {follower.email}
                </div>
              </div>
              <div className="flex mt-2">
                <a href="/">
                  <button className="bg-sky-600 text-white w-16 h-8 rounded  text-center ">
                    Accept
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 ml-8">
          <p className="text-lg text-black font-medium font-['Roboto']">
            Suggested for you
          </p>
        </div>
        <div className=" mt-4 flex flex-col ml-5">
          {followersBlock.map((follower) => (
            <div key={follower.id} className="flex ml-8 mb-3 items-center">
              <img
                src={follower.imgSrc}
                alt={follower.name}
                className="w-11 h-11 rounded-full object-cover mt-1 "
              />
              <div className="flex flex-col text-center  ml-5 w-36 h-10">
                <div className="flex text-black text-base   font-normal  font-['Roboto']">
                  {follower.name}
                </div>
                <div className="flex mr-16 text-neutral-500 text-xs font-normal  font-['Roboto'] ">
                  {follower.email}
                </div>
              </div>
              <div className="flex">
                <a href="/">
                  <button className="bg-sky-600 text-white rounded w-16 h-8 mt-1 text-center">
                    Follow
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
