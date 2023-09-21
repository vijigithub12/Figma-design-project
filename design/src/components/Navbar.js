import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <div>
      <header className="h-[80px] bg-rose-300 flex items-center">
        <div className="relative">
          <a href="/" className="h1 text-5xl font-normal ml-24">
            Plonk
          </a>
        </div>
        <div className="flex items-center w-50">
          <img
            className="w-14 h-14 rounded-full border-2 border-rose-600 ml-60"
            src="/images/navii.png"
            alt=""
          />
          <a href="/" className="ml-16 text-black text-lg font-medium">
            My Friends
          </a>
          <a href="/" className="ml-16 text-black text-lg font-medium">
            My Gallery
          </a>
        </div>
        <div className="ml-48 mr-12">
          <div className="flex items-center">
            <div className="relative ">
              <input
                type="text"
                placeholder="Search"
                className="text-black text-lg placeholder-black bg-rose-300 outline-none pr-8"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-1 mt-1">
                <a href="/">
                  <img src="images/search.png" alt="" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-zinc-900"></div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
