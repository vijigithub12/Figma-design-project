import React from "react";
import followerBlock from "./followerBlock.json";
import followersBlock from "./followersBlock.json";

const Rightbar = () => {
  return (
    <div className="w-[600px] h-screen ml-10  mr-8 mt-16">
      <div className="w-[500px] h-[730px] border border-slate-400 rounded-2xl ml-16 ">
        <div className="mt-8 ml-8">
          <p className="text-black text-2xl font-medium font-['Roboto']">
            Recent Followers
          </p>
        </div>
        <div className=" mt-6 flex flex-col ml-7">
          {followerBlock.map((follower) => (
            <div key={follower.id} className="flex ml-5 mb-3 items-center">
              <img
                src={follower.imgSrc}
                alt={follower.name}
                className="w-16 h-16 rounded-full  mt-1 "
              />
              <div className="flex flex-col text-center  ml-5 w-36 h-10">
                <div className="flex text-black text-lg   font-normal  font-['Roboto']">
                  {follower.name}
                </div>
                <div className="flex mr-16 text-neutral-500 text-sm font-normal  font-['Roboto'] ">
                  {follower.email}
                </div>
              </div>
              <div className="flex mt-2 ml-8">
                <a href="/">
                  <button className="bg-sky-600 text-white w-20 h-10 rounded  text-center ">
                    Accept
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 ml-8">
          <p className="text-xl  text-black font-medium font-['Roboto']">
            Suggested for you
          </p>
        </div>
        <div className=" mt-4 flex flex-col ml-5">
          {followersBlock.map((follower) => (
            <div key={follower.id} className="flex ml-8 mb-3 items-center">
              <img
                src={follower.imgSrc}
                alt={follower.name}
                className="w-16 h-16 rounded-full  mt-1 "
              />
              <div className="flex flex-col text-center  ml-5 w-36 h-10">
                <div className="flex text-black text-lg   font-normal  font-['Roboto']">
                  {follower.name}
                </div>
                <div className="flex mr-16 text-neutral-500 text-sm font-normal  font-['Roboto'] ">
                  {follower.email}
                </div>
              </div>
              <div className="flex ml-8">
                <a href="/">
                  <button className="bg-sky-600 text-white rounded w-20 h-10 mt-1 text-center">
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
